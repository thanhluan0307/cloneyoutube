import React from 'react'

import Header from '../../component/Header/header'
import Navbar from '../../component/Navbar/navbar'

import styles from "./home.module.scss"

const Home = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.contaier}>
              <Navbar/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Home