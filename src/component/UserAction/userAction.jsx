import React, { memo } from 'react'
import styles from "./userAction.module.scss"
import {FaVideo,FaBell,FaUser} from "react-icons/fa"

import Tippy from "@tippyjs/react";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Wrapper from "../Wrapper/wrapper";
import {BsFillCloudArrowUpFill} from "react-icons/bs";
import {CiWifiOn} from "react-icons/ci";
import {FaRegUserCircle} from "react-icons/fa";
import {SlControlPlay} from "react-icons/sl";
import {FiUsers} from "react-icons/fi";
import {FiLogIn} from "react-icons/fi";
import {CiDollar} from "react-icons/ci";
import {RiShieldUserLine} from "react-icons/ri";
import {FaRegMoon} from "react-icons/fa";
import {FaLanguage} from "react-icons/fa";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {GrLanguage} from "react-icons/gr";
import {BsKeyboard,BsBell} from "react-icons/bs";
import {FiHelpCircle} from "react-icons/fi";
import {MdOutlineFeedback} from "react-icons/md";
import {BsShieldCheck} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";

import { Box } from "@mui/system";

const UserAction = () => {

   
  return (
    <div className={styles.actions}>
                <Tippy  trigger='click' interactive placement="bottom-end" offset={[0,0]} content={
                   <Wrapper>
                        <p className={styles.item}><BsFillCloudArrowUpFill/><p>Tải lên video</p></p>
                        <p className={styles.item}><CiWifiOn/><p>Phát trực tiếp</p></p>
                    </Wrapper>
                }>
                    <div>
                        <Tooltip title="Tạo">
                            <IconButton aria-label="delete">
                            <FaVideo className="icon"/>   
                            </IconButton>
                        </Tooltip>
                    </div>
                </Tippy>
                 <Tippy trigger="click" interactive placement="bottom-start" offset={[0,0]} content={
                    <Wrapper>
                        <Box sx={{textAlign:'center',padding:'0 10px',fontSize:'18px'}}>
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(0, 0, 0, 0.15)'}}>
                                <Typography sx={{fontSize:'16px'}}>Thông báo</Typography>
                                <Tooltip title="Cài đặt">
                                    <IconButton aria-label="delete">
                                        <AiOutlineSetting/>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Box sx={{padding:'40px'}}>
                                <BsBell className={styles.bell}/>
                                <Typography sx={{fontSize:'16px',fontWeight:'600', margin:'10px 0 4px 0'}}>
                                    Thông báo của bạn hiển thị ở đây               
                                </Typography>
                                <Typography sx={{fontSize:'14px'}}>
                                    Đăng ký kênh yêu thích của bạn để nhận thông báo về các video mới nhất.
                                </Typography>
                            </Box>
                        </Box>
                    </Wrapper>
                }>
                    <div>
                        <Tooltip title="Thông báo">
                            <IconButton aria-label="delete">
                            <FaBell className="icon"/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Tippy> 
                 <Tippy trigger="click" interactive placement="bottom-start" offset={[0,0]} content={
                    <Wrapper>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                            <p className={styles.item}><FaRegUserCircle/><p>Kênh của bạn</p></p>
                            <p className={styles.item}><SlControlPlay/><p>Youtobe Studio</p></p>
                            <p className={styles.item}><FiUsers/><p>Chuyển đổi tài khoản</p><MdOutlineArrowForwardIos/></p>
                            <p className={styles.item}><FiLogIn/><p>Đăng xuất</p></p>

                        </Box>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                        <p className={styles.item}><CiDollar/><p>Giao dịch và mua gói thành viên</p></p>
                        <p className={styles.item}><RiShieldUserLine/><p>Dữ liệu của bạn trong Youtube</p></p>
                           
                        </Box>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                            <p className={styles.item}><FaRegMoon/><p>Giao diện : Giao diện thiết bị</p><MdOutlineArrowForwardIos/></p>
                            <p className={styles.item}><FaLanguage/><p>Ngôn ngữ: Tiếng Việt</p><MdOutlineArrowForwardIos/></p>
                            <p className={styles.item}><BsShieldCheck/><p>Chế độ hạn chế : Đã tắt</p><MdOutlineArrowForwardIos/></p>
                            <p className={styles.item}><GrLanguage/><p>Địa điểm: Việt Nam</p><MdOutlineArrowForwardIos/></p>
                            <p className={styles.item}><BsKeyboard/><p>Phím tắt</p></p>
                        </Box>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                        <p className={styles.item}><AiOutlineSetting/><p>Cài đặt</p></p>

                           
                        </Box>
                        <Box sx={{paddingTop:'8px'}}>
                        <p className={styles.item}><FiHelpCircle/><p>Trợ giúp</p></p>
                        <p className={styles.item}><MdOutlineFeedback/><p>Gửi ý kiến phảm hồi</p></p>
                           
                        </Box>
                    </Wrapper>
                }>
                    <div>
                        <Tooltip title="Thông tin">
                            <IconButton aria-label="delete">
                            <FaUser className="icon"/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Tippy> 
            </div>
  )
}

export default memo(UserAction)