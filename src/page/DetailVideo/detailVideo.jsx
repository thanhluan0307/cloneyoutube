import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

import styles from "./detailVideo.module.scss"
import { fetchingAPI } from '../../fetchingAPI'
import Header from "../../component/Header/header"
import VideoInfo from '../../component/VideoInfo/videoInfo'
import ListVideo from "../../component/ListVideo/listVideo"
import { VideoContext } from '../../videoContext'


const DetailVideo = () => {
  const {setCheck} = useContext(VideoContext)
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
        <Header setCheck={setCheck}/>
        <div className={styles.wrapper}>
              <VideoInfo data={dataVideo}/>
            <div className={styles.listVideo}>
              <ListVideo/>
            </div>
        </div>
    </>
  )
}

export default DetailVideo