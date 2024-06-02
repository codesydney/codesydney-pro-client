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

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`
    }
    return request
  },
  (error: AxiosError) => {
    // TODO: Add proper error handling
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config!
    const statusCode = error.response?.status

    if (
      statusCode === 401 &&
      !error.response?.config?.url?.includes('auth/refresh') &&
      !error.response?.config?.url?.includes('auth/login')
    ) {
      const refreshToken = localStorage.getItem('refreshToken') ?? ''

      // I think this is uga buga as we have to set the refresh token as header
      // So it gets attached to the request
      // For some reason the global interceptor over writes the request below
      // Right now too tired to figure out why, so
      // TODO: Sort out this interceptor to have the proper logic for refreshing tokens
      localStorage.setItem('accessToken', refreshToken)

      if (refreshToken) {
        try {
          const { data } = await apiClient.post<Tokens>(
            APIEndpoints.Auth.authRefreshToken(),
            {
              refreshToken,
            },
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            },
          )
          const newAccessToken = data.data.accessToken
          localStorage.setItem('accessToken', newAccessToken)
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return axios(originalRequest)
        } catch (error) {
          // TODO: Add proper error handling
          console.warn('interceptors.response error', error)

          // Not sure if this the right argument to call
          // Got ask the folks later
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  },
)

export default apiClient
