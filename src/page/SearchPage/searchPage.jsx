import { Avatar } from '@mui/material'
import { RiMore2Fill } from 'react-icons/ri'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AiOutlineClockCircle, AiOutlineMenuUnfold } from 'react-icons/ai'

import styles from "./searchVideo.module.scss"
import { fetchingAPI } from '../../fetchingAPI'
import Header from '../../component/Header/header'
import NavbarPc from '../../component/NavbarPc/navbarPc'
import { VideoContext } from '../../videoContext'
import NavbarMobi from '../../component/NavbarMobi/navbarMobi'
const SearchVideo = () => {
  const {check,setCheck} = useContext(VideoContext)
  const [searchParams,] = useSearchParams()
  const [data,setData] = useState([])
  
  useEffect(() => {
    fetchingAPI(`search?part=snippet&type=video&maxResults=20&q=${searchParams}`)
      .then (res => 
        setData(res.items))
      .catch (error => setData(error))  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchParams])
  return (
    <>
    <Header setCheck={setCheck}/>

    {check ? <NavbarPc/> : <NavbarMobi/>}
      <div className={check ? styles.wrapper : styles.ml260}>
        {data.map(item => {

        return (
          <Link key={item?.id?.videoId} className={styles.contaier} to={`/video/${item?.id?.videoId}`}>
            <div className={styles.video}> 
              <img  src={item?.snippet?.thumbnails?.medium?.url} alt=""/> 
              <div className={styles.icons}>
                  <p><AiOutlineClockCircle/></p>
                  <p> <AiOutlineMenuUnfold/></p>
              </div>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{item?.snippet?.title}</p>
                <Link to={`/channels/${item?.snippet?.channelId}`}> 
                  <p className={styles.channels}><Avatar src={item?.snippet?.thumbnails?.medium?.url} sx={{width:'30px',height:'30px'}}/><span>{item?.snippet?.channelTitle}</span></p>
                </Link>
                <p className={styles.des}>{item?.snippet?.description}</p>
            </div>
            <div className={styles.more}>
              <RiMore2Fill/>
            </div>
          </Link>
        )})}
      </div> 
    </>
   
  )
}

export default SearchVideo