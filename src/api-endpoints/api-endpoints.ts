export const APIEndpoints = {
  Auth: {
    authRegister: () => `api/v1/auth/register`,
    authLogin: () => `api/v1/auth/login`,
    authLogout: () => `api/v1/auth/logout`,
    authRefreshToken: () => `api/v1/auth/refresh`,
  },
  User: {
    users: () => `api/v1/user/all`,
  },
}
