import React, { memo } from 'react'
import { Box, Typography } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import {SlNote} from "react-icons/sl";
import {TbMoodKid} from "react-icons/tb";
import {GrGamepad} from "react-icons/gr";
import {ImNewspaper} from "react-icons/im";
import {SiRiotgames } from "react-icons/si";
import {RiFeedbackLine} from "react-icons/ri";
import { FaHome, FaTv  } from 'react-icons/fa'
import {GiMusicalNotes,GiTrophyCup} from "react-icons/gi";
import { FcMusic,FcSportsMode,FcNews } from "react-icons/fc";
import {AiOutlineFire,AiOutlineSetting } from "react-icons/ai";

import styles from "./navbar.module.scss"
const Navbar = ({check}) => {
   
  return (
    <>
        { check ? (
             <div className={styles.wrapper} >
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <p className={styles.item}><FaHome/><span>Thư viện</span></p>
                 <p className={styles.item}><ShortcutIcon/><span>Shorts</span></p>
                 <p className={styles.item}><SlideshowIcon/><span>Kênh đăng ký</span></p>
             </Box>
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <p className={styles.item}><LibraryAddIcon/><span>Thư viện</span></p>
                 <p className={styles.item}><RestoreIcon/><span>Video đã xem</span></p>
                 <p className={styles.item}><QueryBuilderIcon/><span>Xem sau</span></p>
                 <p className={styles.item}><ThumbUpOffAltIcon/><span>Video đã thích</span></p>
             </Box>
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <p className={styles.title}>Kênh đăng ký</p>
                 <p className={styles.item}><FcMusic/><span>Âm nhạc</span></p>
                 <p className={styles.item}><FcSportsMode/><span>Thể thao</span></p>
                 <p className={styles.item}><SiRiotgames/><span>Trò chơi</span></p>
                 <p className={styles.item}><FcNews/><span>Tin tức</span></p>
             </Box>
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <p className={styles.title}>Khám phá</p>
                 <p className={styles.item}><AiOutlineFire/><span>Thịnh hành</span></p>
                 <p className={styles.item}><GiMusicalNotes/><span>Am nhạc</span></p>
                 <p className={styles.item}><GrGamepad/><span>Trò chơi</span></p>
                 <p className={styles.item}><ImNewspaper/><span>Tin tức</span></p>
                 <p className={styles.item}><GiTrophyCup/><span>Thể thao</span></p>
             </Box>
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <p className={styles.title}>Dịch vụ khác</p>
                 <p className={styles.item}><FaHome/><span>Creator Studio</span></p>
                 <p className={styles.item}><ShortcutIcon/><span>Youtobe Music</span></p>
                 <p className={styles.item}><TbMoodKid/><span>Youtobe Kids</span></p>
                 <p className={styles.item}><FaTv/><span>Youtobe TV</span></p>
             </Box>
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <p className={styles.item}><AiOutlineSetting/><span>Cài đặt</span></p>
                 <p className={styles.item}><SlNote/><span>NHật ký báo cáo</span></p>
                 <p className={styles.item}><RiFeedbackLine/><span>Gửi ý kiến phản hồi</span></p>
             </Box>
             <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                 <Typography variant="body2" color="text.secondary" sx={{fontSize:'13px',color:'#606060',marginBottom:'6px'}}>
                     Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo Quảng cáo Nhà phát triển
                 </Typography>
                 <Typography variant="body2" color="text.secondary" sx={{fontSize:'13px',color:'#606060',marginBottom:'6px'}}>    
                     Điều khoản Quyền riêng tư Chính sách và an toàn Cách YouTube hoạt động Thử các tính năng mới
                 </Typography>
                 <Typography variant="body2" color="text.secondary" sx={{fontSize:'13px'}}>    
                     © 2022 Google LLC
                 </Typography>
             </Box>
         </div>
        ) : <div className={styles.wrapper}>
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
        }
    </>
  )
}

export default memo(Navbar)