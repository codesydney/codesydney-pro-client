import { useUsers } from '../api/user'
import FunkyLoading from '../components/FunkyLoading'
import ErrorAlert from '../components/alerts/ErrorAlert'
import WarningAlert from '../components/alerts/WarningAlert'

export default function UsersPage() {
  const { data, error, isLoading } = useUsers()
  return (
    <section className="flex flex-col gap-4 py-20">
      <WarningAlert />

      <div className=" m-4">{isLoading && <FunkyLoading />}</div>

      {!isLoading && error && (
        <ErrorAlert
          title={'An Error Occurred'}
          message={error.message}
          closeLabel={'Dismiss'}
        />
      )}

      {!isLoading && !error && (
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
            {data?.map(user => {
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
                    Last Name:{' '}
                    <span className=" font-bold">{user.lastName}</span>
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
        </section>
      )}
    </section>
  )
}
