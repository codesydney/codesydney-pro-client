import { FC } from 'react'
import logoImage from '../../assets/code-sydney.png'

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center w-[92%]">
      <div>
        <img className="w-16" src={logoImage} alt="Code Sydney Logo" />
      </div>

      <div>
        <ul className="flex items-center gap-[4vw]">
          <li className="hover:text-gray-500">Home</li>
          <li className="hover:text-gray-500">Developers</li>
          <li className="hover:text-gray-500">Contact Us</li>
        </ul>
      </div>

      <div>
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Register
        </button>
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
