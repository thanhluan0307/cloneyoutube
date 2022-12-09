import React, { useState } from 'react'

import Header from '../../component/Header/header'
import Navbar from '../../component/Navbar/navbar'

import styles from "./home.module.scss"

const Home = ({children}) => {
  const [check,setCheck] = useState(true)
  return (
    <div className={styles.wrapper}>
        <Header setCheck={setCheck}/>
        <div className={styles.contaier}>
               <Navbar check={check}/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Home