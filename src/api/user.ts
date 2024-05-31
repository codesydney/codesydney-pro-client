import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { UserResponse } from '../types/auth.types'
import apiClient from './client'

export async function getUsers(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<UserResponse> {
  try {
    const { data } = await apiClient.get<UserResponse>(
      APIEndpoints.User.users(),
    )
    setLoading(false)
    return data
  } catch (error) {
    setLoading(false)
    // TODO: Set a proper error handler
    console.error('Error fetching users:', error)
    throw error
  }
}
