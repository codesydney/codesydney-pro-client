import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import SideBar from '../components/dashboard/SideBar'

export default function Admin() {
  const authContextValue = useAuth()
  const auth = authContextValue?.decodedToken

  if (auth?.id && auth?.role === 'USER') {
    return <Navigate to="/home" />
  }

  if (auth?.id && auth?.role === 'ADMIN') {
    return (
      <div className="h-screen flex flex-col gap-4">
        <SideBar>
          {/* Outlet navigates to the routed pages */}
          {/* This sm:ml-64 is to offset the sidebar*/}
          <main className="sm:ml-64">
            <Outlet />
          </main>
        </SideBar>
      </div>
    )
  }
}
