import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./videoSmall.module.scss"
const VideoSmall = ({data,idVideo}) => {
  const {description,channelTitle,thumbnails} = data
  return (
    <Link className={styles.wrapper} to={`/video/${idVideo}`}>
        <div className={styles.thumb}>
            <img src={thumbnails?.default?.url} alt="" />
        </div>
        <div className={styles.info}>
            <p className={styles.des}>{description}</p>
            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
              {channelTitle}    
            </Typography>
        </div>
    </Link>
  )
}

export default VideoSmall