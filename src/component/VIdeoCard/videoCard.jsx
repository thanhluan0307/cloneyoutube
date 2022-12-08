import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

import styles from "./video.module.scss"
import { Link } from 'react-router-dom';

export default function ImgMediaCard({data,idVideo}) {
    const {title,channelTitle,thumbnails} = data
    const URL = `https://www.youtube.com/embed/${idVideo}`
    const videoRef = React.useRef()
    const hanlePlayVideo = () => {
      videoRef.current.src = `${URL}?autoplay=1`
    }
    const hanlePauseVideo = () => {
      videoRef.current.src = URL
    }
  return (
    <div className={styles.item} onMouseOver={hanlePlayVideo} onMouseLeave={hanlePauseVideo}>
         <Card sx={{ width: 345 ,borderRadius:"10px",boxShadow:"none"}}>
            <iframe
              className={styles.video}
              ref={videoRef}
              width="423" 
              height="238" 
              src={URL} 
              title={URL}
            >
            </iframe>
      <CardContent>
            <div className={styles.info}>
               <Link> <Avatar src={thumbnails?.default?.url}/></Link>
                <div className={styles.title}>
                <Link to={`/video/${idVideo}`}>
                  <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold',marginBottom:'10px'}}>
                        {title}
                  </Typography>
                 </Link>  
                    <Link> 
                        <Typography variant="body2" color="text.secondary" sx={{fontSize:"12px"}}>
                            {channelTitle}
                        </Typography>
                    </Link>
                </div>
            </div>
      </CardContent>
    </Card>
    </div>
  );
}

<iframe width="424" height="238" src="https://www.youtube.com/embed/07ooCSWIfa4" title="Build Search Filter with React | ReactJS Search Bar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>