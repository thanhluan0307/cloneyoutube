import React, { memo } from 'react'
import { Box, Typography } from '@mui/material'
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { FaHome  } from 'react-icons/fa'

import styles from "./navbar.module.scss"


const Navbarmobi = () => {
   
  return (
  <div className={styles.wrapper}>
        <Box sx={{textAlign:'center',fontSize:"18px",}}>
            <Box sx={{margin:'14px 0',padding:"4px",'&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)'},cursor:'pointer',borderRadius:'6px'}}>
                <FaHome/>
                <Typography sx={{fontSize:"10px"}}>Trang chủ</Typography>
            </Box>
            <Box sx={{margin:'14px 0',padding:"4px",'&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)'},cursor:'pointer',borderRadius:'6px'}}>
                <ShortcutIcon/>
                <Typography sx={{fontSize:"10px"}}>Shorts</Typography>
            </Box>
            <Box sx={{margin:'14px 0',padding:"4px",'&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)'},cursor:'pointer',borderRadius:'6px'}}>
                <SlideshowIcon/>
                <Typography sx={{fontSize:"10px"}}>Kênh đăng ký</Typography>
            </Box>
            <Box sx={{margin:'14px 0',padding:"4px",'&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.07)'},cursor:'pointer',borderRadius:'6px'}}>
                <LibraryAddIcon/>
                <Typography sx={{fontSize:"10px"}}>Thư viện</Typography>
            </Box>
        </Box>
    </div>
  )
}
export default memo(Navbarmobi)