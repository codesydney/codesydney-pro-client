import { useState } from 'react'
import TableHeader from './TableHeader'
import ExpCreateModal from '../modals/ExpCreateModal'
import TableBody from './TableBody'

export default function ExpTable() {
  const [addExp, setAddExp] = useState<boolean>(false)

  function handleAddExp(event: boolean) {
    setAddExp(event)
  }

  return (
    <div>
      {!addExp && (
        <div className=" flex flex-col gap-4">
          <TableHeader handleAddExp={handleAddExp} />

          <TableBody />
        </div>
      )}

      {addExp && <ExpCreateModal handleAddExp={handleAddExp} />}
    </div>
  )
}
