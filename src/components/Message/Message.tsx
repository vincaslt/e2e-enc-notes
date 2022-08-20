import { ReactNode } from 'react'
import styles from './Message.module.css'

interface Props {
  children: ReactNode
  title?: ReactNode
}

function Message({ children, title }: Props) {
  return (
    <div className={styles.message}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  )
}

export default Message
