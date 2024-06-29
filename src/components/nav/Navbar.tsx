import { FC, useState } from 'react'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import logoImage from '../../assets/code-sydney.png'

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="border-b-2 fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto p-[20px]">
        <div>
          <img
            className="w-16 cursor-pointer"
            src={logoImage}
            alt="Code Sydney Logo"
          />
        </div>

        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[35vh] left-0 ${menuOpen ? 'opacity-100 visible top-[100%]' : 'opacity-0 invisible top-[100%]'} md:opacity-100 md:visible md:top-auto md:flex md:items-center md:px-0 z-50 transition-all md:w-auto w-full`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:p-0 p-[15px]">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">Developers</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
            <li className="md:hidden block hover:text-gray-500 cursor-pointer">
              Login
            </li>
            <li className="md:hidden block hover:text-gray-500 cursor-pointer">
              Register
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-[#355878] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden md:block">
            Login
          </button>
          <button className="bg-[#355878] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden md:block">
            Register
          </button>
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
