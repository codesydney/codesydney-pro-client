import { NavLink, useNavigate } from 'react-router-dom'
import { MouseEvent } from 'react'
import { LogoHeader } from '../components/LogoHeader'

export default function LoginPage() {
  const navigate = useNavigate()

  function gotToApp(
    _event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ): void {
    _event.preventDefault()
    // If the action is success then navigate
    if (true) {
      navigate('/home')
    }
  }
  return (
    <section className=" h-screen flex flex-col gap-4 justify-between items-center py-20 m-4">
      <LogoHeader title="Techies4Good" />

      <div className="w-full sm:max-w-[450px]">
        <div className=" text-xl text-center font-medium mb-4">
          <h2>Login</h2>
        </div>
        <form>
          <div className="">
            <label className="text-sm font-bold">Email</label>
            <input
              type="email"
              placeholder="email"
              className="flex h-12 w-full items-center justify-center rounded-md border-2 bg-white/0 p-3 text-sm outline-none border-black"
            />
          </div>
          <div className="">
            <label className="text-sm font-bold">Password</label>
            <input
              type="password"
              placeholder="password"
              className="flex h-12 w-full items-center justify-center rounded-md border-2 bg-white/0 p-3 text-sm outline-none border-black"
            />
          </div>
        </form>
      </div>

      <div className=" w-full sm:max-w-[450px] flex flex-col items-center">
        <a className=" w-full m-auto" href="/register">
          <button
            type="button"
            className=" w-full m-auto rounded bg-black px-4 py-2 text-white shadow-md uppercase border-2 border-black"
            onClick={event => gotToApp(event)}
          >
            Login
          </button>
        </a>

        <p className="mt-6 flex justify-center gap-2 text-sm font-light">
          Don't have an account?
          <NavLink to={'/register'} className="text-sm font-bold text-black">
            Register
          </NavLink>
        </p>
      </div>
    </section>
  )
}
