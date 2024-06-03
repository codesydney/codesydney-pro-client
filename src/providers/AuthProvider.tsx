import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { AccessToken } from '../types/auth.types'

const INIT_STATE: AccessToken = {
  id: '',
  email: '',
  role: 'USER',
  exp: 0,
}

export type AuthContextValue =
  | {
      token: string | null
      decodedToken: AccessToken | null
    }
  | undefined

const AuthContext = createContext<AuthContextValue | undefined>(undefined)
export function useAuth() {
  return useContext(AuthContext)
}

type Props = {
  children: React.ReactNode
}

export default function AuthProvider(props: Props) {
  // State to hold the authentication token
  const [token, _] = useState<string | null>(
    localStorage.getItem('accessToken'),
  )
  const [decodedToken, setDecodedToken] = useState<AccessToken>(INIT_STATE)

  useEffect(() => {
    if (token) {
      const arrayToken = token.split('.')
      const tokenPayload: AccessToken = JSON.parse(atob(arrayToken[1]))
      setDecodedToken(tokenPayload)
    }
  }, [token])

  const contextValue: AuthContextValue = useMemo(createContextValue, [
    token,
    decodedToken,
  ])

  function createContextValue(): AuthContextValue {
    return {
      token,
      decodedToken,
    }
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}
