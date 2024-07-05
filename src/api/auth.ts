import { Dispatch, SetStateAction } from 'react'
import apiClient from './client'
import { APIEndpoints } from '../api-endpoints/api-endpoints'
import { Tokens, UserLogin, UserRegister } from '../types/auth.types'

export async function registerAccount(
  payload: UserRegister,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setMessage: Dispatch<SetStateAction<string>>,
): Promise<Tokens> {
  try {
    const { data } = await apiClient.post<Tokens>(
      APIEndpoints.Auth.authRegister(),
      payload,
    )

    if (data.data.accessToken && data.data.refreshToken) {
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)
    }

    setLoading(false)
    setMessage('')

    return data
  } catch (error: any) {
    setLoading(false)
    setMessage(error?.response?.data.message)
    throw error
  }
}

export async function login(
  payload: UserLogin,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setMessage: Dispatch<SetStateAction<string>>,
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
    setMessage('')

    return data
  } catch (error: any) {
    setLoading(false)
    setMessage(error?.response?.data.message)

    throw error
  }
}

export async function logout(
  setLoading: Dispatch<SetStateAction<boolean>>,
): Promise<void> {
  try {
    setLoading(true)
    await apiClient.post(APIEndpoints.Auth.authLogout())
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error('Error logging out:', error)
    throw error
  }
}
