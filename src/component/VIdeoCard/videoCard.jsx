
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

 function VideoCard({data,idVideo,check}) {
  const [playVideo,setPlayVideo] = useState(false)
   const dataCard = useContext(VideoContext)
    const URL = `https://www.youtube.com/embed/${idVideo}?autoplay=1&controls=0&showinfo=0`
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
    <div className={check ? styles.item : styles.nam}>
      <Card sx={{ width:"100%" ,borderRadius:"10px",boxShadow:"none"}}>
        {dataCard.load ? (
          <Link to={`/video/${idVideo}`}>
            {playVideo ? (   
              <iframe
                className={styles.video}
                width="345px" 
                height="190px" 
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
      
          <CardContent sx={{display:'flex',padding:'16px 10px 0px 10px',columnGap:'10px'}}>
        
              {dataCard.load ? ( <Link to={`/channels/${data?.snippet?.channelId}`}> <Avatar src={data?.snippet?.thumbnails?.default?.url}/></Link>):
                <Skeleton variant="circular" width={40} height={40} />
              }
    
                {dataCard.load ? (    
                    <Box sx={{width:'100%',position:'relative'}}>
                        <Link to={`/video/${idVideo}`}>
                          <p className={styles.title} component={'span'}>
                            {data?.snippet?.title}
                          </p>
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
    </Card>
    </div>
  );
}

export default memo(VideoCard)





