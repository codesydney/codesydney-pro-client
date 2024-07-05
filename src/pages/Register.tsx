import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { omit } from 'lodash'
import { yupResolver } from '@hookform/resolvers/yup'
import { CiWarning } from 'react-icons/ci'
import { toast } from 'sonner'
import { registerSchema } from '../schema'
import { IRegister } from '../types'
import { registerAccount } from '../api/auth'
import { useAuth } from '../providers/AuthProvider'
import Notification from '../components/Notification.tsx'

const Register: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { setToken } = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = async (formData: IRegister) => {
    const data = omit(formData, 'passwordConfirm')

    setLoading(true)

    const response = await registerAccount(data, setLoading, setErrorMessage)
    if (response?.data) {
      setToken(response.data.accessToken)
      navigate('/home/experimental')
      toast.success('Account created successfully')
    }
  }

  return (
    <div className="h-auto md:h-[70vh] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-[15px] md:px-0 mt-[30px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or{' '}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
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
                htmlFor="firstName"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                First name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  {...register('firstName')}
                  className={`input input-bordered w-full ${
                    errors.firstName
                      ? 'border-2 border-red-500 focus:border-transparent focus:outline-red-500 focus:ring-2 focus:ring-red-500'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary'
                  } focus:outline-primary`}
                />

                {errors.firstName && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.firstName.message}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register('lastName')}
                    className={`input input-bordered w-full ${
                      errors.lastName
                        ? 'border-2 border-red-500 focus:border-transparent focus:outline-red-500 focus:ring-2 focus:ring-red-500'
                        : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary'
                    } focus:outline-primary`}
                  />

                  {errors.lastName && (
                    <div className="label">
                      <span className="label-text-alt text-red-500">
                        {errors.lastName.message}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Email address
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
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  {...register('passwordConfirm')}
                  className={`input input-bordered w-full ${
                    errors.passwordConfirm
                      ? 'border-2 border-red-500 focus:border-transparent focus:outline-red-500 focus:ring-2 focus:ring-red-500'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary'
                  } focus:outline-primary`}
                />

                {errors.passwordConfirm && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      {errors.passwordConfirm.message}
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
                    'Register'
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

export default Register
