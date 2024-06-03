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
  Experimental: {
    getAllExp: () => `api/v1/experimental/all`,
    getExpById: (id: string) => `api/v1/experimental/by-id/${id}`,
    getExpByTag: (tag: string) => `api/v1/experimental/by-tag/${tag}`,
    createExp: () => `api/v1/experimental/create`,
    updateExp: (id: string) => `api/v1/experimental/update/${id}`,
    deleteExp: (id: string) => `api/v1/experimental/delete/${id}`,
  },
}
