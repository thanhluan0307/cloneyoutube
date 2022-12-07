import React from 'react'
import styles from "./wrapper.module.scss"
const wrapper = ({children}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}

export default wrapper