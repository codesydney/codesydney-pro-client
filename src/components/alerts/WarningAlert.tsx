import { FaEye, FaTools } from 'react-icons/fa'

type Props = {
  showButtons?: boolean
}

export default function WarningAlert(props: Props) {
  const { showButtons = false } = props
  return (
    <div
      id="alert-additional-content-4"
      className="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
      role="alert"
    >
      <div className="flex items-center">
        <FaTools className="flex-shrink-0 w-4 h-4 me-2" />
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">This is a Experimental Page</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">
        Using this page to develop experimental features before adding to it's
        proper space.
      </div>
      <div className={showButtons ? 'flex' : 'hidden'}>
        <button
          type="button"
          className="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800"
        >
          <FaEye className="me-2 h-3 w-3" />
          View more
        </button>
        <button
          type="button"
          className="text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800"
          data-dismiss-target="#alert-additional-content-4"
          aria-label="Close"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
