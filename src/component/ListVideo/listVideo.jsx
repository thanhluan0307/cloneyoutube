import React, { useContext } from 'react'
import VideoSmall from '../VideoSmall/videoSmall'
import styles from "./listVideo.module.scss"

import { VideoContext } from "../../videoContext";

const ListVideo = () => {
  const dataCard = useContext(VideoContext)
  return (
    <div className={styles.wrapper}>
         {dataCard.listCard.map(item => {
            return (
                <VideoSmall key={item.etag} data={item.snippet} idVideo={item.id.videoId}/>
            ) 
         })}
    </div> 
  )
}

export default ListVideo