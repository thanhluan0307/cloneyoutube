
import { memo, useContext, useMemo, useState } from 'react'

import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from "./video.module.scss";
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { VideoContext } from '../../videoContext';
 function ImgMediaCard({data,idVideo}) {
  const [playVideo,setPlayVideo] = useState(false)
   const dataCard = useContext(VideoContext)
    const URL = `https://www.youtube.com/embed/${idVideo}?autoplay=1`
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
   
  return (
    <div className={styles.item} 
   // onMouseMove={()=>setPlayVideo(true)} onMouseLeave={() => setPlayVideo(false)}
    >
      <Card sx={{ width:"100%" ,borderRadius:"10px",boxShadow:"none"}}>
        {dataCard.load ? (
          <Link to={`/video/${idVideo}`}>
            {playVideo ? (   
              <iframe
                className={styles.video}
                width="345px" 
                height="180px" 
                src={URL} 
                title={URL}
              >
              </iframe>) : (   
              <CardMedia
                sx={{borderRadius:"10px"}}
                component="img"
                alt="green iguana"
                height="188"
                width="100%"
                image={data?.snippet?.thumbnails?.medium?.url}
              />)}
          </Link>
          ) : <Skeleton variant="rectangular" width={345} height={188}  sx={{borderRadius:'10px'}}/>
        }
        <CardContent>
          <div className={styles.info}>
            {dataCard.load ? ( <Link to={`/channels/${data?.snippet?.channelId}`}> <Avatar src={data?.snippet?.thumbnails?.default?.url}/></Link>):
              <Skeleton variant="circular" width={40} height={40} />
            }
            <div className={styles.title}>
              {dataCard.load ? (
                <Box sx={{pr:3}}>
                    <Link to={`/video/${idVideo}`}>
                      <Typography gutterBottom variant="body2" sx={{fontWeight:'bold',marginBottom:'4px'}} className={styles.titleVideo}>
                        {data?.snippet?.title}
                      </Typography>
                      <Typography display="block" variant="caption" color="text.secondary" sx={{fontSize:"12px"}}>
                        {data?.snippet?.channelTitle}
                      </Typography>
                      <Typography display="block" variant="caption" color="text.secondary" sx={{fontSize:"12px"}}>
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
            </div>
          </div>
        </CardContent>
    </Card>
    </div>
  );
}

export default memo(ImgMediaCard)
