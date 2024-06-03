import { FaChevronDown, FaFilter, FaPlus, FaSearch } from 'react-icons/fa'

type Props = {
  handleAddExp: (arg: boolean) => void
}

export default function TableHeader(props: Props) {
  const { handleAddExp } = props

  return (
    <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            onClick={() => handleAddExp(true)}
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add product
          </button>
          <div className="flex items-center w-full space-x-3 md:w-auto">
            <button
              id="actionsDropdownButton"
              data-dropdown-toggle="actionsDropdown"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <FaChevronDown className="-ml-1 mr-1.5 w-5 h-5" />
              Actions
            </button>
            <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="actionsDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mass Edit
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete all
                </a>
              </div>
            </div>
            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <FaFilter className="w-4 h-4 mr-2 text-gray-400" />
              Filter
              <FaChevronDown className="-ml-1 mr-1.5 w-5 h-5" />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="filterDropdown"
              className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </h6>
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="dropdownDefault"
              >
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="tag"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    EXP
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    FINAL
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    PROTO
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
