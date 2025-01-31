import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { loginSchema } from '../schema'
import { ILogin } from '../types'
import { login } from '../api/auth'
import { useAuth } from '../providers/AuthProvider'
import Notification from '../components/Notification.tsx'
import { CiWarning } from 'react-icons/ci'

const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const { setToken } = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (formData: ILogin) => {
    setLoading(true)

    const response = await login(formData, setLoading, setErrorMessage)
    if (response?.data) {
      setToken(response.data.accessToken)
      navigate('/admin')
      toast.success('Login successful')
    }
  }

  return (
    <div className="h-auto md:h-[70vh] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-[15px] md:px-0 mt-[30px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Login to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {errorMessage && (
          <div className="mb-[15px]">
            <Notification
              icon={CiWarning}
              message={errorMessage}
              type={'warning'}
            />
          </div>
        )}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  {...register('email')}
                  className={`input input-bordered w-full ${
                    errors.email
                      ? 'border-2 border-red-500 focus:border-transparent focus:outline-red-500 focus:ring-2 focus:ring-red-500'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary'
                  } focus:outline-primary`}
                />

                {errors.email && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  {...register('password')}
                  className={`input input-bordered w-full ${
                    errors.password
                      ? 'border-2 border-red-500 focus:border-transparent focus:outline-red-500 focus:ring-2 focus:ring-red-500'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary'
                  } focus:outline-primary`}
                />

                {errors.password && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button className="btn bg-primary-950 w-full text-white hover:bg-primary-600">
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    'Login'
                  )}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
