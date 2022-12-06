import React from 'react'

import styles from "./videoInfo.module.scss"
const VideoInfo = ({data}) => {

  return (
    <div className={styles.wrapper}>
        <iframe 
            width="1280" 
            height="720" 
            src={`https://www.youtube.com/embed/${data.id}`} 
            title={data.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoInfo