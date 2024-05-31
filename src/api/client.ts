import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { Tokens } from '../types/auth.types'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken')
    console.warn('interceptors.request accessToken', accessToken)
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`
    }
    return request
  },
  (error: AxiosError) => {
    // TODO: Add proper error handling
    console.warn('interceptors.request error', error)
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config!

    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken') ?? ''

      if (refreshToken) {
        try {
          const { data } = await apiClient.post<Tokens>(
            APIEndpoints.Auth.authRefreshToken(),
            {
              refreshToken,
            },
          )

          const newAccessToken = data.data.accessToken
          localStorage.setItem('accessToken', newAccessToken)
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return axios(originalRequest)
        } catch (error) {
          // TODO: Add proper error handling
          console.warn('interceptors.response error', error)

          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  },
)

export default apiClient
