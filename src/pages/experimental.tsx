import { useEffect, useState } from 'react'
import FunkyLoading from '../components/FunkyLoading'
import ErrorAlert from '../components/alerts/ErrorAlert'
import { Experimental } from '../types/experimental'
import { getAllExperiments } from '../api/experimental'
import ExpTable from '../components/tables/ExpTable'
import WarningAlert from '../components/alerts/WarningAlert'

export default function ExperimentalPage() {
  const [exps, setExps] = useState<Experimental[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>(undefined)

  async function handleGetExps(signal: AbortSignal) {
    const { data, loading, error } = await getAllExperiments(signal)
    setExps(data as Experimental[])
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

  return (
    <section className="flex flex-col gap-4 py-20">
      <div className=" m-4">
        <WarningAlert />

        {loading && <FunkyLoading />}
      </div>

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
            <ExpTable data={exps} />
          </div>
        </section>
      )}
    </section>
  )
}
