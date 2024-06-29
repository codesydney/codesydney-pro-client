export interface IRegister {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

export interface ILogin {
  email: string
  password: string
}
