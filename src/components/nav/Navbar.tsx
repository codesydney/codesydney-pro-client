import { FC } from 'react'
import logoImage from '../../assets/code-sydney.png'

const Navbar: FC = () => {
  return (
    <nav className="">
      <div>
        <img className="w-16" src={logoImage} alt="Code Sydney Logo" />
        <p>Code.Sydney</p>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Developers</li>
        </ul>
      </div>

      <div>
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Register
        </button>
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
