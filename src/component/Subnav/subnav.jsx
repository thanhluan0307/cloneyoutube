import { Button } from '@mui/material'
import React from 'react'
import styles from "./subnav.module.scss"
const Subnav = () => {
  return (
    <div className={styles.wrapper}>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Tất cả</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Âm nhạc</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Tin tức</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>CHương trình nấu ăn</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Trò chơi</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}> Hoạt họa</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Bóng đá</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Thiên nhiên</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Trò chơi hành động phiêu lưu</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Mới tải lên gần đây</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'99px',padding:'16px'}}>Đề xuất mới</Button>
    </div>
  )
}

export default Subnav