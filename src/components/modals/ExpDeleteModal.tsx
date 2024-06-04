import { FaRegWindowClose, FaTrashAlt } from 'react-icons/fa'
import { Experimental } from '../../types/experimental'
import { FormEvent } from 'react'
import { deleteExperiment } from '../../api/experimental'
type Props = {
  data: Experimental
  closeModal: () => void
}

export default function ExpDeleteModal(props: Props) {
  const { data, closeModal } = props

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.stopPropagation()

    const result = await deleteExperiment(data.id as string)

    if (result) {
      closeModal()
    }
  }
  return (
    <div
      aria-hidden="true"
      className=" m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-20 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="absolute top-[40%] sm:left-[30%] p-4 w-full max-w-md h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <FaRegWindowClose className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <FaTrashAlt className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" />
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
            <br />
            <span className=" font-semibold">{data?.label}</span> with Id:{' '}
            <span className=" font-semibold">{data?.id}</span>
          </p>

          <form onSubmit={onSubmit}>
            <div className="flex justify-center items-center space-x-4">
              <button
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={closeModal}
              >
                No, cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
