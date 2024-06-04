import React, { useState } from 'react'
import { Experimental } from '../../types/experimental'
import TableFooter from './TableFooter'
import ExpUpdateModal from '../modals/ExpUpdateModal'
import { FaCheckCircle, FaEdit, FaTimes, FaTrashAlt } from 'react-icons/fa'
import ExpDeleteModal from '../modals/ExpDeleteModal'

type Props = {
  data: Experimental[]
}

type ModalType = 'update' | 'delete' | null

export default function TableBody(props: Props) {
  const { data } = props

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  )
  const [modalType, setModalType] = useState<ModalType>(null)

  function openModal(type: ModalType, index: number) {
    setSelectedItemIndex(index)
    setModalType(type)
  }

  function closeModal() {
    setSelectedItemIndex(null)
    setModalType(null)
  }

  return (
    <React.Fragment>
      <div className="min-h-[50vh] bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4"></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Id
                </th>
                <th scope="col" className="px-4 py-3">
                  Tag
                </th>
                <th scope="col" className="px-4 py-3">
                  Label
                </th>
                <th scope="col" className="px-4 py-3">
                  Completed
                </th>
                <th scope="col" className="px-4 py-3">
                  Update
                </th>
                <th scope="col" className="px-4 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={item.id} className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.id}
                    </th>
                    <td className="px-4 py-3">{item?.tag}</td>
                    <td className="px-4 py-3">{item?.label}</td>
                    <td className="px-4 py-3">
                      {item?.completed ? (
                        <FaCheckCircle className="w-5 h-5 me-2 text-green-700" />
                      ) : (
                        <FaTimes className="w-5 h-5 me-2 text-red-700" />
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => openModal('update', index)}
                      >
                        <FaEdit className="w-3.5 h-3.5 me-2" />
                        Update
                      </button>
                    </td>

                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={() => openModal('delete', index)}
                      >
                        <FaTrashAlt className="w-3.5 h-3.5 me-2" />
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <TableFooter />
      </div>

      {modalType === 'update' && selectedItemIndex !== null && (
        <ExpUpdateModal
          data={data[selectedItemIndex]}
          closeModal={closeModal}
        />
      )}

      {modalType === 'delete' && selectedItemIndex !== null && (
        <ExpDeleteModal
          data={data[selectedItemIndex]}
          closeModal={closeModal}
        />
      )}
    </React.Fragment>
  )
}
