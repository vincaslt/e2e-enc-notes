import { ReactNode } from 'react'
import styles from './Sidebar.module.css'

interface Props {
  children: ReactNode
}

function Sidebar({ children }: Props) {
  return <div className={styles.sidebar}>{children}</div>
}

export default Sidebar
