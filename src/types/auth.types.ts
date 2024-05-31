export type Tokens = {
  data: {
    accessToken: string
    refreshToken: string
  }
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
