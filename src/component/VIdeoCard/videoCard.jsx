
import { memo, useContext, useMemo, useRef, useState } from 'react'

import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from "./video.module.scss";
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { VideoContext } from '../../videoContext';
import {getFormattedDurationString} from '../../videoContext'


import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import {BsCollectionPlay} from "react-icons/bs";



 function VideoCard({data,idVideo,check}) {
  
  const [playVideo,setPlayVideo] = useState(false)
  const [show,setShow] = useState(true)
  
  let timeId = useRef()
  const dataCard = useContext(VideoContext)
  const duration = data?.contentDetails?.duration
  const view = data?.statistics?.viewCount 
  const timeCreateVideo = data?.snippet?.publishedAt
  const time = useMemo(()=> {
     let time = (Date.parse(new Date()) - Date.parse(timeCreateVideo))/ 100 / 60 / 60
     let check = 0;
     let day = 0;
     let month = 0;
     let year = 0;
     if (time > 24) {
       day = Math.round(time / 24);
       if (day > 30) {
          month = Math.round(day / 30);
          check += 1;
          
          if (month > 12) {
            year = Math.round(month / 12);
            check += 1;
          }
        }
      }
      if (check === 2) { return time = year + ' năm trươc'}
      if (check === 1) { return time = month + ' tháng trươc'}
      if (check === 0) { return time = day + ' ngày trươc'}
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  const hanlePlayvideo =  () => {
      timeId.current = setTimeout(()=> {setPlayVideo(true)},2000)
      setShow(false)
   }

  const handlePauseVideo = () => {
    clearTimeout(timeId.current)
    setPlayVideo(false)
    setShow(true)
   }
   return (
    <div  className={window.innerWidth > 1300 && check ? styles.item : styles.nam} onMouseLeave={handlePauseVideo} >
      <Card sx={{ width:"100%" ,borderRadius:"10px",boxShadow:"none"}}>
        {dataCard.load ? (
          <Link to={`/video/${idVideo}`}>
            {playVideo ? (   
                <iframe
                  className={styles.video}
                  width="345px" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${idVideo}?controls=0&showinfo=0&autoplay=1&clipboard-write&modestrbranding=1`} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="s"
                  allowFullScreen
                >
                </iframe>
           ) : (   
              <div style={{position:'relative'}}>
                  <CardMedia
                    onMouseOver={hanlePlayvideo}
                    sx={{borderRadius:"10px",objectFit:'contain'}}
                    component="img"
                    alt="green iguana"
                    height="100%"
                    width="100%"
                    image={data?.snippet?.thumbnails?.medium?.url}
                  />
                  {show ? 
                    <div className={styles.duration}>{getFormattedDurationString(duration)}</div> :
                    <div className={styles.duration}>Tiếp tục di chuột để phát</div>
                  }    
              </div>)}
          </Link>
          ) : <Skeleton variant="rectangular"  sx={{borderRadius:'10px',width:'100%'}} height={188}/>
        }
      
          <CardContent sx={{display:'flex',padding:'10px 30px 0px 10px',columnGap:'10px',position:'relative'}}>
              
              {dataCard.load ? ( <Link to={`/channels/${data?.snippet?.channelId}`}> <Avatar src={data?.snippet?.thumbnails?.default?.url}/></Link>):
                <Skeleton variant="circular" width={40} height={40} />
              }
                {dataCard.load ? (    
                  <Box sx={{width:'100%'}}>
                    <Link to={`/video/${idVideo}`}>
                      <div className={styles.title} component={'span'}>
                        {data?.snippet?.title}
                      </div>
                      <Typography component={'span'} display="block" variant="caption" color="text.secondary" sx={{fontSize:"12px"}}>
                        {data?.snippet?.channelTitle}
                      </Typography>
                      <Typography component={'span'} display="block" variant="caption" color="text.secondary" sx={{fontSize:"12px"}}>
                        { view.length === 6 ? `${view.slice(0,3)} N lượt xem`:`${view[0]} Tr lượt xem` } | {time}
                      </Typography>
                    </Link>   
                  </Box>         
                ):(
                  <Box sx={{ pt: 3 }}>
                    <Skeleton width="200px"/>
                    <Skeleton width="200px" />
                  </Box>
                )}      
                    
          </CardContent>
        <div className={styles.btnVideo}>
            <Button
              sx={{textTransform:'none'}}
              className={styles.actionVideo}
              startIcon={<QueryBuilderIcon/>}
            >
              Xem sau
            </Button>
            <Button
              sx={{textTransform:'none',fontSize:'12px'}}
              className={styles.actionVideo}
              startIcon={<BsCollectionPlay/>}
            >
              Thêm vào 
            </Button>
        </div> 
    </Card>
    </div>
  );
}

export default memo(VideoCard)




