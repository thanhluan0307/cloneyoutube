import React from 'react'
import styles from "./videoSmall.module.scss"
const VideoSmall = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.thumb}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWmvX9sTMK9-lpU512G_nBYam-tINPJJtqw&usqp=CAU" alt="" />
        </div>
        <div className={styles.info}>
            <p className={styles.des}>asdasdasdasdasd</p>
            <p className={styles.channleTitle}>asdasdasdasdasd</p>
        </div>
    </div>
  )
}

export default VideoSmall