import { FaPlus, FaRegWindowClose } from 'react-icons/fa'
import { Experimental } from '../../types/experimental'
import { ChangeEvent, FormEvent, useState } from 'react'
import { updateExperiment } from '../../api/experimental'

type Props = {
  data: Experimental
  closeModal: () => void
}

export default function ExpUpdateModal(props: Props) {
  const { data, closeModal } = props
  const [form, setForm] = useState({
    id: data?.id,
    tag: data?.tag,
    completed: data?.completed,
    label: data?.label,
  })

  function onFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void {
    const { id, value, type } = event.target
    const newValue =
      type === 'checkbox' && event.target instanceof HTMLInputElement
        ? event.target.checked
        : value

    setForm({
      ...form,
      [id]: newValue,
    })
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.stopPropagation()

    const data = await updateExperiment(form.id as string, form)

    if (data.data) {
      closeModal()
    }
  }
  return (
    <>
      <div
        aria-hidden="true"
        className="m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-20 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className=" absolute top-[40%] sm:left-[30%] p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Exp
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <FaRegWindowClose className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={onSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <input id="id" readOnly value={form.id} className="hidden" />
                  <label
                    htmlFor="label"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Label
                  </label>
                  <input
                    type="text"
                    id="label"
                    name="label"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Exp Label"
                    value={form.label}
                    onChange={onFieldChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="tag"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tag
                  </label>
                  <select
                    id="tag"
                    name="tag"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={form.tag}
                    onChange={onFieldChange}
                  >
                    <option value="EXP">EXP</option>
                    <option value="FINAL">FINAL</option>
                    <option value="PROTO">PROTO</option>
                  </select>
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="completed"
                      name="completed"
                      checked={form.completed}
                      onChange={onFieldChange}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Completed
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <FaPlus className="mr-1 -ml-1 w-6 h-6" />
                Submit
              </button>

              <button
                type="button"
                className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-4"
                onClick={closeModal}
              >
                <FaRegWindowClose className="mr-1 -ml-1 w-6 h-6" />
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
