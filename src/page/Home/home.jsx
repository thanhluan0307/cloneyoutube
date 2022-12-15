import React, {  useContext } from 'react'

import styles from "./home.module.scss"
import Header from '../../component/Header/header'
import NavbarPc from '../../component/NavbarPc/navbarPc'
import NavbarMobi from '../../component/NavbarMobi/navbarMobi'
import Subnav from '../../component/Subnav/subnav'
import Content from '../../component/Content/content'
import { VideoContext } from '../../videoContext'



const Home = () => {
    const {check,setCheck} = useContext(VideoContext)

  return (
    <div className={styles.wrapper}>
        <Header setCheck={setCheck}/>
        <Subnav check={check}/>
        <div className={styles.contaier}>
              {check ? <NavbarPc/> : <NavbarMobi/>}
          <Content check={check}/>
        </div>
    </div>
  )
}

export default Home