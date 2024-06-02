import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export default function Admin() {
  const authContextValue = useAuth()
  const auth = authContextValue?.decodedToken

  if (auth?.id && auth?.role === 'USER') {
    return <Navigate to="/home" />
  }

  if (auth?.id && auth?.role === 'ADMIN') {
    return (
      <div className="h-screen flex flex-col gap-4 m-4">
        <div className=" flex justify-between gap-2">
          <span>Admin App WIP</span>
          <nav>
            <NavLink
              to={'/admin/dashboard'}
              className="rounded bg-black text-sm font-bold text-white p-4"
            >
              To Customer Query
            </NavLink>
          </nav>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    )
  }
}
