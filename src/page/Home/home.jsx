import React, { useState } from 'react'

import Header from '../../component/Header/header'
import Navbar from '../../component/Navbar/navbar'

import styles from "./home.module.scss"

const Home = ({children}) => {
  const [show,setShow] = useState(true)
  return (
    <div className={styles.wrapper}>
        <Header show={setShow}/>
        <div className={styles.contaier}>
             {show ?  <Navbar/> : null}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Home