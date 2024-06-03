import { FaExclamationCircle } from 'react-icons/fa'

type Props = {
  title: string
  message: string | undefined
  closeLabel: string
}

export default function ErrorAlert(props: Props) {
  const {
    title = 'This is a danger alert',
    message = 'Something went wrong.',
    closeLabel = 'Dismiss',
  } = props
  return (
    <div
      className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
      role="alert"
    >
      <div className="flex items-center">
        <FaExclamationCircle className="flex-shrink-0 w-4 h-4 me-2" />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{message}</div>
      <div className="flex">
        <button
          type="button"
          className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
          data-dismiss-target="#alert-additional-content-2"
          aria-label="Close"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  )
}
