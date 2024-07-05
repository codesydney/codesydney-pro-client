import { FC } from 'react'
import { IconType } from 'react-icons'

interface NotificationProps {
  icon: IconType
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

const Notification: FC<NotificationProps> = ({ icon: Icon, message, type }) => {
  const alertClassName = `alert alert-${type}`

  return (
    <div role="alert" className={alertClassName}>
      <Icon className="h-6 w-6 shrink-0 stroke-current" />
      <span>{message}</span>
    </div>
  )
}

export default Notification
