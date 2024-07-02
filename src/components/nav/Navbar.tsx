import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import logoImage from '../../assets/code-sydney.png'
import { useAuth } from '../../providers/AuthProvider.tsx'

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { isAuthenticated } = useAuth()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="border-b-2 fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto p-[20px]">
        <div>
          <Link to={'/'}>
            <img
              className="w-16 cursor-pointer"
              src={logoImage}
              alt="Code Sydney Logo"
            />
          </Link>
        </div>

        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[35vh] left-0 ${menuOpen ? 'opacity-100 visible top-[100%]' : 'opacity-0 invisible top-[100%]'} md:opacity-100 md:visible md:top-auto md:flex md:items-center md:px-0 z-50 transition-all md:w-auto w-full`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:p-0 p-[15px]">
            <li className="hover:text-gray-500 cursor-pointer text-black">
              <Link to={'/'} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-black">
              <Link to={'/developers'} onClick={closeMenu}>
                Developers
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-black">
              <Link to={'/contact'} onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="md:hidden block hover:text-gray-500 cursor-pointer">
                <Link to={'/login'} onClick={closeMenu}>
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className="md:hidden block hover:text-gray-500 cursor-pointer">
                  <Link to={'/login'} onClick={closeMenu}>
                    Login
                  </Link>
                </li>
                <li className="md:hidden block hover:text-gray-500 cursor-pointer">
                  <Link to={'/register'} onClick={closeMenu}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <button className="bg-primary-950  text-white px-5 py-2 rounded-full hover:bg-primary-600 hidden md:block">
              Logout
            </button>
          ) : (
            <>
              <Link to={'/login'}>
                <button className="bg-primary-950 text-white px-5 py-2 rounded-full hover:bg-primary-600 hidden md:block">
                  Login
                </button>
              </Link>

              <Link to={'/register'}>
                <button className="bg-primary-950  text-white px-5 py-2 rounded-full hover:bg-primary-600 hidden md:block">
                  Register
                </button>
              </Link>
            </>
          )}

          <div
            className="text-3xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoIosClose size={40} /> : <IoIosMenu />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
