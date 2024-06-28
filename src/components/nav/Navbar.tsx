import { FC, useState } from 'react'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import logoImage from '../../assets/code-sydney.png'

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="border-b-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto p-[20px]">
        <div>
          <img
            className="w-16 cursor-pointer"
            src={logoImage}
            alt="Code Sydney Logo"
          />
        </div>

        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="hover:text-gray-500">Home</li>
            <li className="hover:text-gray-500">Developers</li>
            <li className="hover:text-gray-500">Contact Us</li>
            <li className="md:hidden block">
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                Register
              </button>
            </li>
            <li className="md:hidden block hover:text-gray-500">Login</li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-[#355878] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden md:block">
            Register
          </button>
          <button className="bg-[#355878] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden md:block">
            Login
          </button>
          <div
            className="text-3xl cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoIosClose /> : <IoIosMenu />}
          </div>{' '}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
