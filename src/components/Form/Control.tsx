import { HTMLAttributes } from 'react'
import styles from './Control.module.css'

function Control(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.control} {...props} />
}

export default Control
