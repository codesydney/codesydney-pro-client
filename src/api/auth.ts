import apiClient from './client'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { Tokens, UserLogin, UserRegister } from '../types/auth.types'
import axios from 'axios'

export async function register(
  payload: UserRegister,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<Tokens> {
  try {
    const { data } = await apiClient.post<Tokens>(
      APIEndpoints.Auth.authRegister(),
      payload,
    )

    setLoading(false)
    if (data.data.accessToken && data.data.refreshToken) {
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)
    }
    return data
  } catch (error) {
    setLoading(false)

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
    } else {
      // Handle general errors
    }
    // TODO: Set a proper error handler
    console.error('Error fetching tokens:', error)
    throw error
  }
}

export async function login(
  payload: UserLogin,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<Tokens> {
  try {
    const { data } = await apiClient.post<Tokens>(
      APIEndpoints.Auth.authLogin(),
      payload,
    )

    if (data.data.accessToken && data.data.refreshToken) {
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)
    }
    setLoading(false)
    return data
  } catch (error) {
    setLoading(false)

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
    } else {
      // Handle general errors
    }
    // TODO: Set a proper error handler
    console.error('Error fetching tokens:', error)
    throw error
  }
}
