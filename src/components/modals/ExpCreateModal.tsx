import { FaPlus, FaRegWindowClose } from 'react-icons/fa'
import { Experimental } from '../../types/experimental'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createExperiment } from '../../api/experimental'

const FORM_INIT_STATE: Experimental = {
  tag: 'EXP',
  completed: false,
  label: '',
}

type Props = {
  handleAddExp: (arg: boolean) => void
}

export default function ExpCreateModal(props: Props) {
  const { handleAddExp } = props
  const navigate = useNavigate()
  const [form, setForm] = useState(FORM_INIT_STATE)

  function onFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void {
    const value: (typeof form)[keyof typeof form] = event.target.value

    setForm({
      ...form,
      [event.target.id]: value,
    })
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    event.stopPropagation()

    console.warn('form', form)
    const data = await createExperiment(form)

    // If the action is success then navigate
    if (data.data) {
      navigate('/home/experimental')
    }
  }
  return (
    <div
      aria-hidden="true"
      className="m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className=" absolute top-1/4 right-1/4 p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleAddExp(false)}
            >
              <FaRegWindowClose className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
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
                  name="tag"
                  id="tag"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={form.tag}
                  onChange={onFieldChange}
                >
                  <option value="EXP">EXP</option>
                  <option value="FINAL">FINAL</option>
                  <option value="PROTO">PROTO</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <FaPlus className="mr-1 -ml-1 w-6 h-6" />
              Add new Exp
            </button>

            <button
              type="submit"
              className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-4"
              onClick={() => handleAddExp(false)}
            >
              <FaRegWindowClose className="mr-1 -ml-1 w-6 h-6" />
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
