import React from 'react'
import VideoSmall from '../VideoSmall/videoSmall'
import styles from "./listVideo.module.scss"

const ListVideo = () => {
  return (
    <div className={styles.wrapper}>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
       <VideoSmall/>
    </div>
  )
}

export default ListVideo