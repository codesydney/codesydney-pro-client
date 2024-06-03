import { IconType } from 'react-icons'
import {
  FaUserFriends,
  FaTools,
  FaChartBar,
  FaThLarge,
  FaCode,
} from 'react-icons/fa'

export type MenuItem = { label: string; link: string; Icon?: IconType }

//TODO: Move this data file to a proper directory later on
export const sideMenuItems: MenuItem[] = [
  { label: 'dashboard', link: '/', Icon: FaThLarge },
  { label: 'experimental', link: 'exp', Icon: FaTools },
  { label: 'users', link: '', Icon: FaUserFriends },
  { label: 'skills', link: '', Icon: FaCode },
  { label: 'stats', link: '', Icon: FaChartBar },
]
