import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />
}

export default Input
