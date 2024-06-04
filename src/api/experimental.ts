import axios from 'axios'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import {
  ExperimentalApiResponse,
  ExperimentsApiResponse,
  Experimental,
} from '../types/experimental'
import apiClient from './client'

// Api calls implementation using a generic apiRequest helper function and Types
// Located at the end

export async function getAllExperiments(
  signal?: AbortSignal,
): Promise<ApiExperimentsResponse> {
  const url = APIEndpoints.Experimental.getAllExp()
  const response = await apiRequest<ExperimentsApiResponse>(
    () => apiClient.get<ExperimentsApiResponse>(url, { signal }),
    { data: [] },
    signal,
  )
  return {
    data: response.data.data,
    loading: response.loading,
    error: response.error,
  }
}

export async function getExperiment(
  id: string,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  const url = APIEndpoints.Experimental.getExpById(id)
  const response = await apiRequest<ExperimentalApiResponse>(
    () => apiClient.get<ExperimentalApiResponse>(url, { signal }),
    { data: undefined },
    signal,
  )
  return {
    data: response.data.data,
    loading: response.loading,
    error: response.error,
  }
}

export async function getExperimentByTag(
  tag: string,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  const url = APIEndpoints.Experimental.getExpByTag(tag)
  const response = await apiRequest<ExperimentalApiResponse>(
    () => apiClient.get<ExperimentalApiResponse>(url, { signal }),
    { data: undefined },
    signal,
  )
  return {
    data: response.data.data,
    loading: response.loading,
    error: response.error,
  }
}

export async function createExperiment(
  payload: Experimental,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  const url = APIEndpoints.Experimental.createExp()
  const response = await apiRequest<ExperimentalApiResponse>(
    () => apiClient.post<ExperimentalApiResponse>(url, payload, { signal }),
    { data: undefined },
    signal,
  )
  return {
    data: response.data.data,
    loading: response.loading,
    error: response.error,
  }
}

export async function updateExperiment(
  id: string,
  payload: Partial<Experimental>,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  const url = APIEndpoints.Experimental.updateExp(id)
  const response = await apiRequest<ExperimentalApiResponse>(
    () => apiClient.put<ExperimentalApiResponse>(url, payload, { signal }),
    { data: undefined },
    signal,
  )
  return {
    data: response.data.data,
    loading: response.loading,
    error: response.error,
  }
}

export async function deleteExperiment(
  id: string,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  const url = APIEndpoints.Experimental.deleteExp(id)
  const response = await apiRequest<ExperimentalApiResponse>(
    () => apiClient.delete<ExperimentalApiResponse>(url, { signal }),
    { data: undefined },
    signal,
  )
  return {
    data: response.data.data,
    loading: response.loading,
    error: response.error,
  }
}

export type ApiExperimentsResponse = {
  data: Experimental[] | undefined
  loading: boolean
  error: string | undefined
}

export type ApiExperimentalResponse = {
  data: Experimental | undefined
  loading: boolean
  error: string | undefined
}

// Generic apiRequest helper function and Types below

async function apiRequest<T>(
  request: () => Promise<{ data: T }>,
  defaultData: T,
  _signal?: AbortSignal, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<{ data: T; loading: boolean; error: string | undefined }> {
  let loading = true
  let error: string | undefined = undefined
  let result = defaultData

  try {
    const response = await request()
    result = response.data
  } catch (err) {
    if (axios.isAxiosError(err) && err.message !== 'canceled') {
      error = `An Error occurred ${err.message}`
    } else if (err instanceof Error && err.message !== 'canceled') {
      error = `An Error occurred ${err.message}`
    }
  } finally {
    loading = false
  }

  return { data: result, loading, error }
}
