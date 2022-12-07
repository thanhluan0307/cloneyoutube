import { Avatar, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import Home from '../Home/home'
import styles from "./channels.module.scss"
import {fetchingAPI} from '../../fetchingAPI'
const Channels = () => {
    const {id} = useParams()
    console.log(id)
    const [data,setData] = useState()
    useEffect(() => {
      fetchingAPI(`channels?part=snippet,contentDetails,statistics&id=${id}`)
        .then(res => {
          console.log(res.items[0])
          setData(res.items[0])
        })
        .catch(error => console.log(error))
    },[id])
  return (
    <Home>
        <div className={styles.wrapper}>
          <div className={styles.thumb}>
              <img src={data?.snippet?.thumbnails?.medium?.url} alt="" />
          </div>
          <div className={styles.channelsInfo}>
             <Box sx={{display:'flex', columnGap: '16px'}}>
              <Avatar sx={{ width: 76, height: 76 }} src={data?.snippet?.thumbnails?.default?.url}/>
              <div className={styles.body}>
                  <p className={styles.channelsName}>{data?.snippet?.title}</p>
                  <p className={styles.channelsCustomUrl}>{data?.snippet?.customUrl}</p>
                  <p className={styles.subscriber}>{`${data?.statistics?.subscriberCount} người đăng ký`}</p>
              </div>
             </Box>
             <Box sx={{display:'flex', columnGap: '16px',borderBottom:"2px solid rgba(0,0,0,0.1)",margin:'4px 0 16px 0'}}>
                <Button variant="text">trang chủ</Button>
                <Button variant="text">video</Button>
                <Button variant="text">danh sách phát</Button>
                <Button variant="text">cộng đồng</Button>
                <Button variant="text">kênh</Button>
                <Button variant="text">giới thiệu</Button>
                <Button variant="text"><FaSearch/></Button>
             </Box>
             <Box sx={{display:'flex', columnGap: '16px'}}>
                  <iframe
                    width="424" 
                    height="238" 
                    src="https://www.youtube.com/embed/1sL3Qr2DghU" 
                    title="Top 20 Bản Nhạc Nghe Nhiều Nhất 2022 ♫ BXH Nhạc Trẻ Remix Hot TikTok - Nhạc Remix Hot TikTok 2022" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>  
             </Box>
          </div>
        </div> 
    </Home>
  )
}

export default Channels