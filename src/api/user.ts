import axios from 'axios'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { UserResponse } from '../types/auth.types'
import apiClient from './client'

export async function getUsers(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  signal?: AbortSignal,
): Promise<UserResponse> {
  try {
    const { data } = await apiClient.get<UserResponse>(
      APIEndpoints.User.users(),
      { signal },
    )
    setLoading(false)
    return data
  } catch (error) {
    setLoading(false)
    // TODO: Set a proper error handler
    if (!axios.isCancel(error)) {
      console.error('Error fetching users:', error)
    }

    throw error
  }
}
