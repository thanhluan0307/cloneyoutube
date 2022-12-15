import React, { memo } from 'react'
import { Box } from "@mui/system";
import Tippy from "@tippyjs/react";
import { IconButton, Tooltip, Typography } from "@mui/material";


import Modal from '@mui/material/Modal';

import {GrLanguage} from "react-icons/gr";
import {SlControlPlay} from "react-icons/sl";
import {RiShieldUserLine} from "react-icons/ri";
import {AiOutlineSetting} from "react-icons/ai";
import {CiWifiOn,CiDollar} from "react-icons/ci";
import {BsFillCloudArrowUpFill} from "react-icons/bs";
import {FiUsers,FiLogIn,FiHelpCircle} from "react-icons/fi";
import {BsKeyboard,BsBell,BsShieldCheck} from "react-icons/bs";
import {MdOutlineFeedback,MdOutlineArrowForwardIos} from "react-icons/md";
import {FaRegMoon,FaLanguage,FaRegUserCircle,FaVideo,FaBell,FaUser} from "react-icons/fa";

import Wrapper from "../Wrapper/wrapper";
import styles from "./userAction.module.scss"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const UserAction = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                                <Typography component={'span'}  sx={{fontSize:'16px'}}>Thông báo</Typography>
                                <Tooltip title="Cài đặt">
                                    <IconButton aria-label="delete">
                                        <AiOutlineSetting/>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Box sx={{padding:'40px'}}>
                                <BsBell className={styles.bell}/>
                                <Typography component={'span'}  sx={{fontSize:'16px',fontWeight:'600', margin:'10px 0 4px 0'}}>
                                    Thông báo của bạn hiển thị ở đây               
                                </Typography>
                                <Typography component={'span'}  sx={{fontSize:'14px'}}>
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
                            <p onClick={handleOpen} className={styles.item}><FiLogIn/><p>Đăng nhập</p></p>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                                </Box>
                            </Modal>

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