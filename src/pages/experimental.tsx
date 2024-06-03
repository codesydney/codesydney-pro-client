import { useEffect, useState } from 'react'
import FunkyLoading from '../components/FunkyLoading'
import ErrorAlert from '../components/alerts/ErrorAlert'
import { Experimental } from '../types/experimental'
import { getAllExperiments } from '../api/experimental'
import ExpTable from '../components/tables/ExpTable'

export default function ExperimentalPage() {
  const [exps, setExps] = useState<Experimental[] | []>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>(undefined)

  async function handleGetExps(signal: AbortSignal) {
    const { data, loading, error } = await getAllExperiments(signal)
    setExps(data)
    setLoading(loading)
    setError(error)
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    handleGetExps(signal)

    return () => {
      // Clean up on unmount
      controller.abort()
    }
  }, [])

  console.warn('loading, error', [loading, error])

  return (
    <section className="flex flex-col gap-4 items-center py-20">
      <div className=" w-full sm:max-w-[450px]">
        <div className=" text-3xl text-center font-medium mb-4">
          <h1>This is an experimental page!</h1>
        </div>
      </div>
      {loading && <FunkyLoading />}
      {!loading && error && (
        <ErrorAlert
          title={'An Error Occurred'}
          message={error}
          closeLabel={'Dismiss'}
        />
      )}

      {!loading && !error && (
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            <ExpTable />
          </div>
        </section>
      )}

      {/* {!loading && !error && (
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
      )} */}
    </section>
  )
}
