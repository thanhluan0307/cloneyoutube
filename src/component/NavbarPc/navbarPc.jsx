import React, { memo } from 'react'
import styles from "../NavbarPc/navbarPc.module.scss"

import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Typography } from '@mui/material'
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import {SlNote} from "react-icons/sl";
import {TbMoodKid} from "react-icons/tb";
import {GrGamepad} from "react-icons/gr";
import {ImNewspaper} from "react-icons/im";
import {SiRiotgames } from "react-icons/si";
import {RiFeedbackLine} from "react-icons/ri";
import { FaHome, FaTv, FaVideo  } from 'react-icons/fa'
import {GiMusicalNotes,GiTrophyCup} from "react-icons/gi";
import { FcMusic,FcSportsMode,FcNews } from "react-icons/fc";
import {AiOutlineFire,AiOutlineSetting } from "react-icons/ai";

const NavbarPc = () => {
  return (
    <div className={styles.wrapper} >
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
        <div className={styles.item}><FaHome/><span>Thư viện</span></div>
        <div className={styles.item}><ShortcutIcon/><span>Shorts</span></div>
        <div className={styles.item}><SlideshowIcon/><span>Kênh đăng ký</span></div>
    </Box>
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
        <div className={styles.item}><LibraryAddIcon/><span>Thư viện</span></div>
        <div className={styles.item}><FaVideo/><span>Video đã xem</span></div>
        <div className={styles.item}><QueryBuilderIcon/><span>Xem sau</span></div>
        <div className={styles.item}><ThumbUpOffAltIcon/><span>Video đã thích</span></div>
    </Box>
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
        <p className={styles.title}>Kênh đăng ký</p>
        <div className={styles.item}><FcMusic/><span>Âm nhạc</span></div>
        <div className={styles.item}><FcSportsMode/><span>Thể thao</span></div>
        <div className={styles.item}><SiRiotgames/><span>Trò chơi</span></div>
        <div className={styles.item}><FcNews/><span>Tin tức</span></div>
    </Box>
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
        <p className={styles.title}>Khám phá</p>
        <div className={styles.item}><AiOutlineFire/><span>Thịnh hành</span></div>
        <div className={styles.item}><GiMusicalNotes/><span>Am nhạc</span></div>
        <div className={styles.item}><GrGamepad/><span>Trò chơi</span></div>
        <div className={styles.item}><ImNewspaper/><span>Tin tức</span></div>
        <div className={styles.item}><GiTrophyCup/><span>Thể thao</span></div>
    </Box>
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
        <p className={styles.title}>Dịch vụ khác</p>
        <div className={styles.item}><FaHome/><span>Creator Studio</span></div>
        <div className={styles.item}><ShortcutIcon/><span>Youtobe Music</span></div>
        <div className={styles.item}><TbMoodKid/><span>Youtobe Kids</span></div>
        <div className={styles.item}><FaTv/><span>Youtobe TV</span></div>
    </Box>
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
        <div className={styles.item}><AiOutlineSetting/><span>Cài đặt</span></div>
        <div className={styles.item}><SlNote/><span>NHật ký báo cáo</span></div>
        <div className={styles.item}><RiFeedbackLine/><span>Gửi ý kiến </span></div>
    </Box>
    <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px',maxWidth:'208px'}}>
        <Typography component={'span'}  variant="body2" color="text.secondary" sx={{fontSize:'13px',color:'#606060',marginBottom:'6px'}}>
            Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo Quảng cáo Nhà phát triển
        </Typography>
        <Typography component={'span'}  variant="body2" color="text.secondary" sx={{fontSize:'13px',color:'#606060',marginBottom:'6px'}}>    
            Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube hoạt động Thử các tính năng mới
        </Typography>
        <Typography component={'span'}  variant="body2" color="text.secondary" sx={{fontSize:'13px'}}>    
            © 2022 Google LLC
        </Typography>
    </Box>
</div>
  )
}

export default memo(NavbarPc)