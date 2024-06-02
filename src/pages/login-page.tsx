import { NavLink, useNavigate } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'
import { LogoHeader } from '../components/LogoHeader'
import { UserLogin } from '../types/auth.types'
import { login } from '../api/auth'
import LoadingSpinner from '../components/LoadingSpinner'

const FORM_INIT_STATE: UserLogin = {
  email: '',
  password: '',
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(FORM_INIT_STATE)
  const [loading, setLoading] = useState<boolean>(false)

  function onFieldChange(event: ChangeEvent<HTMLInputElement>): void {
    const value: (typeof form)[keyof typeof form] = event.target.value

    setForm({
      ...form,
      [event.target.id]: value,
    })
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    event.stopPropagation()
    setLoading(true)

    const data = await login(form, setLoading)

    // If the action is success then navigate
    if (data.data) {
      navigate('/admin')
    }
  }

  return (
    <section className=" h-screen flex flex-col gap-4 justify-between items-center py-20 m-4">
      <LogoHeader title="Techies4Good" />

      <div className="w-full sm:max-w-[450px]">
        <div className=" text-xl text-center font-medium mb-4">
          <h2>Login</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="">
            <label className="text-sm font-bold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="flex h-12 w-full items-center justify-center rounded-md border-2 bg-white/0 p-3 text-sm outline-none border-black"
              onChange={onFieldChange}
            />
          </div>
          <div className="">
            <label className="text-sm font-bold">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="flex h-12 w-full items-center justify-center rounded-md border-2 bg-white/0 p-3 text-sm outline-none border-black"
              onChange={onFieldChange}
            />
          </div>
          <div className=" w-full sm:max-w-[450px] flex flex-col items-center mt-4">
            <button
              type="submit"
              className=" w-full m-auto rounded bg-black px-4 py-2 text-white shadow-md uppercase border-2 border-black"
              disabled={loading}
            >
              {loading && <LoadingSpinner />}
              Login
            </button>

            <p className="mt-6 flex justify-center gap-2 text-sm font-light">
              Don't have an account?
              <NavLink
                to={'/register'}
                className="text-sm font-bold text-black"
              >
                Register
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
