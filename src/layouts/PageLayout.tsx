import { Outlet } from 'react-router'
import styles from './PageLayout.module.css'

function PageLayout() {
  return (
    <div className={styles.pageContainer}>
      <Outlet />
    </div>
  )
}

export default PageLayout
