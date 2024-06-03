import axios, { AxiosError } from 'axios'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { UserResponse } from '../types/auth.types'
import apiClient from './client'

export type ApiResponse = {
  data: UserResponse
  loading: boolean
  error: string | undefined
}

export async function getUsers(signal?: AbortSignal): Promise<ApiResponse> {
  let loading: boolean = false
  let err: string | undefined = undefined
  let result: UserResponse = { data: [] }

  try {
    loading = true
    const { data } = await apiClient.get<UserResponse>(
      APIEndpoints.User.users(),
      { signal },
    )

    result = data
    loading = false
    return { data: result, loading: loading, error: err }
  } catch (error) {
    if (
      error instanceof AxiosError ||
      (error instanceof AxiosError && !axios.isCancel(error))
    ) {
      // Handle Axios-specific errors
      error = `An Error occurred ${error.message}`
      loading = false
      return { data: result, loading: loading, error: err }
    } else if (error instanceof Error && error.message !== 'canceled') {
      // Handle general errors
      // TODO: Set a proper error handler
      err = `An Error occurred ${error.message}`
      loading = false
      return { data: result, loading: loading, error: err }
    }

    return { data: result, loading: loading, error: err }
  }
}
