export type Tokens = {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type AccessToken = {
  id: string
  email: string
  role: Roles
  exp: number
}

export interface UserRegister {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface User {
  id?: string
  email: string
  firstName: string
  lastName: string
  password: string
  refreshToken?: string
}

export interface UserResponse {
  data: User[]
}

export type Roles = 'ADMIN' | 'USER'
