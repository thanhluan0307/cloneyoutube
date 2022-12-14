import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

import styles from "./videoSmall.module.scss"

const VideoSmall = ({data,idVideo}) => {

  const {title,channelTitle,thumbnails} = data
  return (
    <Link className={styles.wrapper} to={`/video/${idVideo}`}>
        <div className={styles.thumb}>
            <img src={thumbnails?.default?.url} alt="" />
        </div>
        <div className={styles.info}>
            <p className={styles.des}>{title}</p>
            <Typography component={'span'}  variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
              {channelTitle}    
            </Typography>
        </div>
    </Link>
  )
}

export default VideoSmall