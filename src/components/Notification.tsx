import { FC } from 'react'
import { IconType } from 'react-icons'
import cx from 'classnames'

interface NotificationProps {
  icon: IconType
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

const Notification: FC<NotificationProps> = ({ icon: Icon, message, type }) => {
  const alertClass = cx('alert', {
    'alert-success': type === 'success',
    'alert-error': type === 'error',
    'alert-warning': type === 'warning',
    'alert-info': type === 'info',
  })

  return (
    <div role="alert" className={alertClass}>
      <Icon className="h-6 w-6 shrink-0 stroke-current" />
      <span>{message}</span>
    </div>
  )
}

export default Notification
