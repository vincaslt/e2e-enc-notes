import { ReactNode } from 'react'
import styles from './Sidebar.module.css'

interface Props {
  children: ReactNode
}

function SidebarList({ children }: Props) {
  return <div className={styles.sidebarList}>{children}</div>
}

export default SidebarList
