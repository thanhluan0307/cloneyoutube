import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import styles from "./detailVideo.module.scss"
import { fetchingAPI } from '../../fetchingAPI'
import Header from "../../component/Header/header"
import VideoInfo from '../../component/VideoInfo/videoInfo'
import ListVideo from "../../component/ListVideo/listVideo"

const DetailVideo = () => {
  const {id} =useParams()
  const [dataVideo,setDataVideo] = useState([])
  useEffect(()=> {
   
    fetchingAPI(`videos?part=snippet&id=${id}`)
      .then(res => {
        setDataVideo(res.items[0])
      })
      .then(error => console.log(error))
  },[id])
  return (
    <>
        <Header/>
        <div className={styles.wrapper}>
            <VideoInfo data={dataVideo}/>
            <ListVideo/>
        </div>
    </>
  )
}

export default DetailVideo