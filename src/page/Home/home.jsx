import React from 'react'

import Content from '../../component/Content/content'
import Header from '../../component/Header/header'
import Navbar from '../../component/Navbar/navbar'
import Subnav from '../../component/Subnav/subnav'
import styles from "./home.module.scss"

const Home = () => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.contaier}>
            <Navbar/>
            <div className={styles.content}>
                <Subnav/>
                <Content/>
            </div>
        </div>
    </div>
  )
}

export default Home