import { Button } from '@mui/material'
import React from 'react'
import styles from "./subnav.module.scss"
const Subnav = () => {
  return (
    <div className={styles.wrapper}>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Tất cả</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Âm nhạc</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Tin tức</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Chương trình nấu ăn</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Trò chơi</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}> Hoạt họa</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Bóng đá</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Thiên nhiên</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Trò chơi hành động phiêu lưu</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Mới tải lên gần đây</Button>
      <Button sx={{color:'black',height:"20px",backgroundColor:'rgba(0,0,0,0.1)',marginLeft:'10px',borderRadius:'10px',padding:'16px',textTransform:'none'}}>Đề xuất mới</Button>
    </div>
  )
}

export default Subnav