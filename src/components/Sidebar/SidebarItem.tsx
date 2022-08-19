import { ReactNode } from 'react'
import classnames from '~/utils/classnames'
import styles from './Sidebar.module.css'

interface Props {
  children: ReactNode
  isActive: boolean
  onClick: () => void
}

function SidebarItem({ children, isActive, onClick }: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={classnames(
        styles.sidebarItem,
        isActive && styles.sidebarItemActive
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default SidebarItem
