import { useEffect, useState } from 'react'
import { User } from '../types/auth.types'
import { getUsers } from '../api/user'
import FunkyLoading from '../components/FunkyLoading'

export default function ExperimentalPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function handleGetUsers(signal: AbortSignal) {
    const response = await getUsers(setLoading, signal)
    setUsers(response.data)
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    handleGetUsers(signal)

    return () => {
      // Clean up on unmount
      controller.abort()
    }
  }, [])

  return (
    <section className=" h-screen flex flex-col gap-4 items-center py-20">
      <div className=" w-full sm:max-w-[450px]">
        <div className=" text-3xl text-center font-medium mb-4">
          <h1>This is an experimental page!</h1>
        </div>
      </div>

      {loading && <FunkyLoading />}

      {!loading && (
        <div>
          {users.map(user => {
            return (
              <div key={user.id} className="flex w-full flex-col gap-2">
                <div className="font-regular relative block w-full rounded-lg bg-blue-700 p-4 text-base leading-5 text-white opacity-100">
                  Id: <span className=" font-bold">{user.id}</span>
                </div>
                <div className="font-regular relative block w-full rounded-lg bg-gradient-to-tr bg-blue-700 p-4 text-base leading-5 text-white opacity-100">
                  First Name:{' '}
                  <span className=" font-bold">{user.firstName}</span>
                </div>
                <div className="font-regular relative block w-full rounded-lg bg-gradient-to-tr bg-blue-700 p-4 text-base leading-5 text-white opacity-100">
                  Last Name: <span className=" font-bold">{user.lastName}</span>
                </div>
                <div className="font-regular relative block w-full rounded-lg bg-gradient-to-tr bg-blue-700 p-4 text-base leading-5 text-white opacity-100">
                  Email: <span className=" font-bold">{user.email}</span>
                </div>
                <div className="font-regular relative block w-full rounded-lg bg-gradient-to-tr bg-blue-700 p-4 text-base leading-5 text-white opacity-100">
                  Encrypted Password:{' '}
                  <span className=" font-bold">{user.password}</span>
                </div>
                <div className="font-regular relative block w-full rounded-lg bg-gradient-to-tr bg-blue-700 p-4 text-base leading-5 text-white opacity-100">
                  Encrypted Token:{' '}
                  <span className=" font-bold">{user.refreshToken}</span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
