import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/nav/Navbar.tsx'
import Footer from '../components/Footer.tsx'

const MainLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mt-[105px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
