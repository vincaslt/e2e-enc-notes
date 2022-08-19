import { LabelHTMLAttributes } from 'react'
import styles from './Label.module.css'

function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={styles.label} {...props} />
}

export default Label
