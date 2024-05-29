import { useQuery } from '@tanstack/react-query'
import apiClient from './client'

const fetchHealth = async () => {
  const { data } = await apiClient.get('/health')
  return data
}

export const useHealth = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  })
}
