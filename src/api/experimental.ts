import axios, { AxiosError } from 'axios'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import {
  ExperimentalApiResponse,
  ExperimentsApiResponse,
  Experimental,
} from '../types/experimental'
import apiClient from './client'

export type ApiExperimentsResponse = {
  data: Experimental[] | []
  loading: boolean
  error: string | undefined
}

export type ApiExperimentalResponse = {
  data: Experimental | null
  loading: boolean
  error: string | undefined
}

export async function getAllExperiments(
  signal?: AbortSignal,
): Promise<ApiExperimentsResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: ExperimentsApiResponse | null

  try {
    loading = true
    const url = APIEndpoints.Experimental.getAllExp()
    const response = await apiClient.get<ExperimentsApiResponse>(url, {
      signal,
    })
    result = response.data

    loading = false
    return { data: result.data, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: [], loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: [], loading: loading, error: err }
    }

    return { data: [], loading: loading, error: err }
  }
}

export async function getExperiment(
  id: string,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: ExperimentalApiResponse | null

  try {
    loading = true
    const url = APIEndpoints.Experimental.getExpById(id)
    const response = await apiClient.get<ExperimentalApiResponse>(url, {
      signal,
    })
    result = response.data

    loading = false
    return { data: result.data, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    }

    return { data: null, loading: loading, error: err }
  }
}

export async function getExperimentByTag(
  tag: string,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: ExperimentalApiResponse

  try {
    loading = true
    const url = APIEndpoints.Experimental.getExpByTag(tag)
    const response = await apiClient.get<ExperimentalApiResponse>(url, {
      signal,
    })
    result = response.data

    loading = false
    return { data: result.data, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    }

    return { data: null, loading: loading, error: err }
  }
}

export async function createExperiment(
  payload: Experimental,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: ExperimentalApiResponse

  try {
    loading = true
    const url = APIEndpoints.Experimental.createExp()
    const response = await apiClient.post<ExperimentalApiResponse>(
      url,
      payload,
      {
        signal,
      },
    )
    result = response.data

    loading = false
    return { data: result.data, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    }

    return { data: null, loading: loading, error: err }
  }
}

export async function UpdateExperiment(
  id: string,
  payload: Partial<Experimental>,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: ExperimentalApiResponse | null

  try {
    loading = true
    const url = APIEndpoints.Experimental.updateExp(id)
    const response = await apiClient.put<ExperimentalApiResponse>(
      url,
      payload,
      {
        signal,
      },
    )
    result = response.data

    loading = false
    return { data: result.data, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    }

    return { data: null, loading: loading, error: err }
  }
}

export async function deleteExperiment(
  id: string,
  signal?: AbortSignal,
): Promise<ApiExperimentalResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: ExperimentalApiResponse

  try {
    loading = true
    const url = APIEndpoints.Experimental.deleteExp(id)
    const response = await apiClient.delete<ExperimentalApiResponse>(url, {
      signal,
    })
    result = response.data

    loading = false
    return { data: result.data, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: null, loading: loading, error: err }
    }

    return { data: null, loading: loading, error: err }
  }
}
