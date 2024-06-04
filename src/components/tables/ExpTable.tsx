import { useState } from 'react'
import TableHeader from './TableHeader'
import ExpCreateModal from '../modals/ExpCreateModal'
import TableBody from './TableBody'
import { Experimental } from '../../types/experimental'

type Props = {
  data: Experimental[]
}

export default function ExpTable(props: Props) {
  const { data } = props
  const [addExp, setAddExp] = useState<boolean>(false)

  function handleAddExp(event: boolean) {
    setAddExp(event)
  }

  return (
    <div>
      <div className=" flex flex-col gap-4">
        <TableHeader handleAddExp={handleAddExp} />

        <TableBody data={data} />
      </div>

      {addExp && <ExpCreateModal handleAddExp={handleAddExp} />}
    </div>
  )
}
