import React, { useEffect, useState } from 'react'

import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import Comment from "../Comment/comment"
import styles from "./videoInfo.module.scss"
import { Avatar, Button, Typography } from '@mui/material'
import {FaDownload, FaHeart, FaShare, FaThumbsUp, FaPlus,FaEllipsisH} from "react-icons/fa"

import {fetchingAPI} from '../../fetchingAPI'

const VideoInfo = ({data}) => {
  const {snippet} = data
  const [comment,setComment] = useState([])
  useEffect(() => {
    fetchingAPI(`commentThreads?part=snippet,replies&videoId=${data.id}`)
      .then(res => {
        setComment(res.items)
      })
      .catch(error => console.log(error))
  },[data.id])
  return (
    <div className={styles.wrapper}>
        <iframe 
          width="1280" 
          height="720" 
          src={`https://www.youtube.com/embed/${data.id}?autoplay=1`} 
          title={data.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <Box>
          <h3 className={styles.title}>{snippet?.title}</h3>
          <Box sx={{display:'flex',justifyContent : 'space-between',alignItems:"center"}}>
              <Box sx={{display:'flex',justifyContent : 'space-between',alignItems:"center"}}>
                <Link to={`/channels/${snippet?.channelId}`}><Avatar src={snippet?.thumbnails?.default?.url}/></Link>
                <Typography component={'span'}  sx={{margin:'0 10px'}}>
                  {snippet?.channelTitle}
                </Typography>
                <Button 
                  variant="text" 
                  sx={{textTransform: 'none',
                      color:'white',
                      backgroundColor:'black',
                      borderRadius:'99px',
                      padding:'8px 12px'
                    }}
                  >
                    Đăng ký
                  </Button> 
              </Box>
              <Box>
                  <Button sx={{borderRadius:'99px',marginLeft:'10px',backgroundColor:'rgba(0, 0, 0, 0.05)',textTransform: 'none',minHeight:'36px',color:'black'}}><FaThumbsUp className={styles.mr4}/></Button>
                  <Button sx={{borderRadius:'99px',marginLeft:'10px',backgroundColor:'rgba(0, 0, 0, 0.05)',textTransform: 'none',minHeight:'36px',color:'black'}}><FaShare className={styles.mr4}/>Chia sẻ</Button>
                  <Button sx={{borderRadius:'99px',marginLeft:'10px',backgroundColor:'rgba(0, 0, 0, 0.05)',textTransform: 'none',minHeight:'36px',color:'black'}}><FaDownload className={styles.mr4}/>Tải xuống</Button>
                  <Button sx={{borderRadius:'99px',marginLeft:'10px',backgroundColor:'rgba(0, 0, 0, 0.05)',textTransform: 'none',minHeight:'36px',color:'black'}}><FaHeart className={styles.mr4}/>Cảm ơn</Button>
                  <Button sx={{borderRadius:'99px',marginLeft:'10px',backgroundColor:'rgba(0, 0, 0, 0.05)',textTransform: 'none',minHeight:'36px',color:'black'}}><FaPlus className={styles.mr4}/>Lưu</Button>
                  <Button sx={{borderRadius:'99px',marginLeft:'10px',backgroundColor:'rgba(0, 0, 0, 0.05)',textTransform: 'none',minHeight:'36px',color:'black'}}><FaEllipsisH className={styles.mr4}/></Button>
              </Box>
          </Box>
        </Box>
        <div className={styles.body}>
          <Box 
            sx={{padding:'10px',
                borderRadius:'10px',
                backgroundColor:'rgba(0, 0, 0, 0.05)',
                marginBottom:'20px',
                height: 'max-content',
                '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)'}
              }}        
          >
              <p>{snippet?.description}</p>
          </Box>
            {comment.map(item => {
              return (
                <Comment channelId={snippet?.channelId} key={item.id} data={item}/>
              )
            })}
        </div>
    </div>
    
  )
}

export default VideoInfo