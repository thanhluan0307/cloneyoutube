import React, { memo } from 'react'
import { Box } from "@mui/system";
import Tippy from "@tippyjs/react";
import { IconButton, Tooltip, Typography,TextField, Button, OutlinedInput, InputAdornment, InputLabel, FormControl, Avatar  } from "@mui/material";
import {  useForm } from "react-hook-form";

import Modal from '@mui/material/Modal';

import {GrLanguage} from "react-icons/gr";
import {SlControlPlay} from "react-icons/sl";
import {RiShieldUserLine} from "react-icons/ri";
import {AiOutlineSetting} from "react-icons/ai";
import {CiWifiOn,CiDollar} from "react-icons/ci";
import {BsFillCloudArrowUpFill} from "react-icons/bs";
import {FiUsers,FiLogIn,FiHelpCircle, FiLogOut} from "react-icons/fi";
import {BsKeyboard,BsBell,BsShieldCheck} from "react-icons/bs";
import {MdOutlineFeedback,MdOutlineArrowForwardIos} from "react-icons/md";
import {FaRegMoon,FaLanguage,FaRegUserCircle,FaVideo,FaBell,FaUser} from "react-icons/fa";

import Wrapper from "../Wrapper/wrapper";
import styles from "./userAction.module.scss"
import { Visibility, VisibilityOff } from '@mui/icons-material';


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
    const [check, setCheck] = React.useState(false);
    const [data, setData] = React.useState({});
    const [showPassword, setShowPassword] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onSubmit = data => { 
        console.log(data)
        setData(data)
        setCheck(true)
        setOpen(false)
    };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClear = () => {
    setData({})
    setCheck(false)
  }
  const stringAvatar = (name) => {
    const newString = name.split(' ')
    return {
        children: `${newString[newString.length - 1][0].toUpperCase()}`
    }
  }
  return (
    <div className={styles.actions}>
                <Tippy  trigger='click' interactive placement="bottom-end" offset={[0,0]} content={
                   <Wrapper>
                        <div className={styles.item}><BsFillCloudArrowUpFill/><p>Tải lên video</p></div>
                        <div className={styles.item}><CiWifiOn/><p>Phát trực tiếp</p></div>
                    </Wrapper>
                }>
                    <div>
                        <Tooltip title="Tạo">
                            <IconButton >
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
                                    <IconButton >
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
                            <IconButton >
                            <FaBell className="icon"/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Tippy> 
                 <Tippy trigger="click" interactive placement="bottom-start" offset={[0,0]} content={
                    <Wrapper>
                        { check ?  <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0 8px 20px',display:'flex'}}>
                            <Avatar {...stringAvatar(data.FirstName)} sx={{width:40,height:40,bgcolor:'green'}}/>
                           <div>
                            <div className={styles.item}><span>{data.FirstName}</span></div>
                            <div className={styles.item}><span>{data.email}</span></div>
                            <div className={styles.item}><span style={{fontSize:'16px',color:'#2d78db' }}>Quản lý tài khoản Google </span></div>
                           </div>
                        </Box>: null }
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                            <div className={styles.item}><FaRegUserCircle/><p>Kênh của bạn</p></div>
                            <div className={styles.item}><SlControlPlay/><p>Youtobe Studio</p></div>
                            <div className={styles.item}><FiUsers/><p>Chuyển đổi tài khoản</p><MdOutlineArrowForwardIos/></div>
                            {!check ? 
                            <div onClick={handleOpen} className={styles.item}><FiLogIn/><p>Đăng nhập</p></div> :
                            <div onClick={handleClear} className={styles.item}><FiLogOut/><p>Đăng xuất</p></div>}
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                        fullWidth={true}
                                        id="outlined-text-input"
                                        label="Name"
                                        type="text"
                                        margin="normal"
                                        {...register("FirstName", {required:{value:true,message:'Vui lòng nhập trường này !'}})}
                                        error={errors.FirstName}
                                    />
                                     {errors.FirstName && <span className={styles.errorsMess}>{errors.FirstName.message}</span>}
                                     {errors.LastName && <span classLast Name={styles.errorsMess}>{errors.LastName.message}</span>}
                                    <TextField
                                        fullWidth={true}
                                        id="outlined-email-input"
                                        label="Email"
                                        type="text"
                                        margin="normal"
                                        {...register("email", {required:{value:true,message:'Vui lòng nhập trường này !'},pattern:{value:/^\S+@\S+$/i,message:'Sai định dạng'}})}
                                        error={errors.email}
                                    />
                                    {errors.email && <span className={styles.errorsMess}>{errors.email.message}</span>}
                                    <TextField
                                        margin="normal"
                                        fullWidth={true}
                                        id="outlined-number-input"
                                        label="Phone"
                                        type="number"
                                        {...register("phone", {required:{value:true,message:'Vui lòng nhập trường này !'}, 
                                        minLength: {value:6,message:'SĐT > 6 số'}, maxLength: {value:12,message:'SĐT < 12 số'}})}
                                        error={errors.phone}
                                    />
                                    {errors.phone && <span className={styles.errorsMess}>{errors.phone.message}</span>}
                                        <FormControl  
                                            margin="normal" fullWidth={true} variant="outlined"
                                            error={errors.password}
                                        >
                                            
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                 {...register("password", {required:{value:true,message:'Vui lòng nhập trường này !'}, 
                                                 minLength: {value:6,message:'password > 6 ký tự'}})}
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    
                                                    edge="end"
                                                    >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                        {errors.password && <span className={styles.errorsMess}>{errors.password.message}</span>}
                                    <Button type='submit' variant="outlined">Đăng nhập</Button>
                                </form>
                                </Box>
                            </Modal>

                        </Box>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                            <div className={styles.item}><CiDollar/><p>Giao dịch và mua gói thành viên</p></div>
                            <div className={styles.item}><RiShieldUserLine/><p>Dữ liệu của bạn trong Youtube</p></div>
                        </Box>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                            <div className={styles.item}><FaRegMoon/><p>Giao diện : Giao diện thiết bị</p><MdOutlineArrowForwardIos/></div>
                            <div className={styles.item}><FaLanguage/><p>Ngôn ngữ: Tiếng Việt</p><MdOutlineArrowForwardIos/></div>
                            <div className={styles.item}><BsShieldCheck/><p>Chế độ hạn chế : Đã tắt</p><MdOutlineArrowForwardIos/></div>
                            <div className={styles.item}><GrLanguage/><p>Địa điểm: Việt Nam</p><MdOutlineArrowForwardIos/></div>
                            <div className={styles.item}><BsKeyboard/><p>Phím tắt</p></div>
                        </Box>
                        <Box sx={{borderBottom:'1px solid #e5e5e5',padding:'8px 0px'}}>
                            <div className={styles.item}><AiOutlineSetting/><p>Cài đặt</p></div>                           
                        </Box>
                        <Box sx={{paddingTop:'8px'}}>
                        <div className={styles.item}><FiHelpCircle/><p>Trợ giúp</p></div>
                        <div className={styles.item}><MdOutlineFeedback/><p>Gửi ý kiến phảm hồi</p></div>
                           
                        </Box>
                    </Wrapper>
                }>
                    <div>
                        <Tooltip title="Thông tin">
                            <IconButton >
                               {!check ?  <FaUser className="icon"/> : <Avatar {...stringAvatar(data.FirstName)} sx={{width:25,height:25,bgcolor:'green'}}/>}
                            </IconButton>
                        </Tooltip>
                    </div>
                </Tippy> 
            </div>
  )
}

export default memo(UserAction)