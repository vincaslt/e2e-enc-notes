import { ReactNode } from 'react'
import styles from './Sidebar.module.css'

interface Props {
  children: ReactNode
}

function SidebarItem({ children }: Props) {
  return <div className={styles.sidebarItem}>{children}</div>
}

export default SidebarItem
