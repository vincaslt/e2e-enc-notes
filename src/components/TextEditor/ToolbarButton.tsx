import { HTMLAttributes, ReactNode } from 'react'
import classnames from '~/utils/classnames'
import styles from './TextEditor.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  title: string
  isActive?: boolean
}

function ToolbarButton({ icon, title, isActive, ...rest }: Props) {
  return (
    <button
      title={title}
      className={classnames(
        styles.toolbarButton,
        isActive && styles.toolbarButtonActive
      )}
      {...rest}
    >
      {icon}
    </button>
  )
}

export default ToolbarButton
