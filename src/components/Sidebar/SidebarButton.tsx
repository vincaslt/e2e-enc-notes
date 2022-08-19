import { ReactNode } from 'react'
import classnames from '~/utils/classnames'
import styles from './Sidebar.module.css'

interface Props {
  children: ReactNode
  onClick: () => void
}

function SidebarButton({ children, onClick }: Props) {
  return (
    <button className={classnames(styles.sidebarButton)} onClick={onClick}>
      {children}
    </button>
  )
}

export default SidebarButton
