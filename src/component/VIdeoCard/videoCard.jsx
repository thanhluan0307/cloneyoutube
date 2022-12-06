import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

import styles from "./video.module.scss"
import { Link } from 'react-router-dom';

export default function ImgMediaCard({data,idVideo}) {
    const {description,channelTitle,thumbnails} = data
  return (
    <Card sx={{ maxWidth: 345 ,borderRadius:"10px",boxShadow:"none"}}>
       <Link to={`/video/${idVideo}`}>
            <CardMedia
                sx={{borderRadius:"10px"}}
                component="img"
                alt="green iguana"
                height="188"
                image={thumbnails?.medium?.url}
            />
       </Link>
      <CardContent>
            <div className={styles.info}>
               <Link> <Avatar src={thumbnails?.default?.url}/></Link>
                <div className={styles.title}>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold',marginBottom:'10px'}}>
                         {description}
                    </Typography>
                    <Link> 
                        <Typography variant="body2" color="text.secondary" sx={{fontSize:"12px"}}>
                            {channelTitle}
                        </Typography>
                    </Link>
                </div>
            </div>
      </CardContent>
    </Card>
  );
}