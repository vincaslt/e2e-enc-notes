import { ReactNode } from 'react'
import styles from './PageLayout.module.css'

interface Props {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  return <div className={styles.pageContainer}>{children}</div>
}

export default PageLayout
