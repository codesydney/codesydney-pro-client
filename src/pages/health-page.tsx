import { FC } from 'react'
import { useHealth } from '../api/health'

const HealthPage: FC = () => {
  const { data, error, isLoading } = useHealth()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Health Status</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default HealthPage
