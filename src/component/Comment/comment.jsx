import { Avatar, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from "./comment.module.scss"

const Comment = ({data,channelId}) => {
   
    const infoCommentForUser = data.snippet.topLevelComment.snippet
    const {authorDisplayName,likeCount,textOriginal,authorProfileImageUrl} = infoCommentForUser

  return (
    <div className={styles.commentInfo}>
    <Link to={`/channels/${channelId}`}><Avatar src={authorProfileImageUrl}/></Link>
    <div className={styles.info}>
        <p className={styles.name}>{authorDisplayName}</p>
        <p className={styles.comment}>{textOriginal}</p>
        <Box>
          <span><Button sx={{color:'black',textTransform:'none',minWidth:'28px',borderRadius:'50%','&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)',},fontSize:'16px',alignItems:'center'}}><FaThumbsUp/></Button><span>{likeCount.toString()}</span></span>
          <Button sx={{color:'black',textTransform:'none',minWidth:'28px',borderRadius:'50%','&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)',},marginRight:'18px',fontSize:'16px'}}><FaThumbsDown/></Button>
          <Button sx={{color:'black','&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)'},borderRadius:'99px',textTransform:'none',fontSize:'14px'}}>Phản hồi</Button>
        </Box>
    </div>
</div>
  )
}

export default Comment