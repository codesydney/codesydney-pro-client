import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { User, UserResponse } from '../types/auth.types'
import apiClient from './client'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

async function fetchUsers(): Promise<User[]> {
  const url = APIEndpoints.User.users()
  const response = await apiClient.get<UserResponse>(url)
  return response.data.data
}

export function useUsers(): UseQueryResult<User[], Error> {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
