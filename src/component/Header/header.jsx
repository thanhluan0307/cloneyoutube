import {FaBars, FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom";

import styles from "./header.module.scss"
import Search from "../InputSearch/search";
import UserAction from "../UserAction/userAction";
import logo from '../../assets/images/download.png'
import { memo, useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import NavbarPc from "../NavbarPc/navbarPc";
import {  IconButton, Modal, Tooltip } from "@mui/material";

const style = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: "100%",
  bgcolor: 'background.paper',
  p:1
};

function Header({setCheck}) {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [state, setState] = useState({
        left: false,  
      });
    const [width,setWidth] = useState(window.innerWidth)
    const hanleCheck = () => {
            setCheck(pre => !pre)
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List sx={{width:'241px'}}>
            <Link to="/" className={styles.logo} style={{paddingLeft:'27px'}}>
                <p ><FaBars/></p>
                <img src={logo} alt="" />
            </Link>
            <NavbarPc/>
          </List>
        </Box>
      );
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
        if(window.innerWidth<1300){
            setCheck(false)
        }else{
            setCheck(true)
        }
    }
        window.addEventListener('resize',handleResize)
         return () => {window.removeEventListener('resize',handleResize)}
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.logoBox}>
              <button onClick={ width < 1300 || window.location.href.includes('video') ? (toggleDrawer('left', true)) : hanleCheck  }><FaBars/></button>
                  <Drawer
                      anchor={'left'}
                      open={state['left']}
                      onClose={toggleDrawer('left', false)}
                  >
                      {list('left')}
                  </Drawer>
              <Link to="/" className={styles.logo}>
                  <img src={logo} alt="" />
              </Link>
            </div>
            <div className={styles.display}>
              <Search/>
            </div>

            <div style={{display:'flex',alignItems:'center',color:' rgba(0, 0, 0, 0.54)',fontSize:'18px',columnGap:'12px'}}>
              {width < 710 ?
                  <>
                    <Tooltip title="Tìm kiếm" onClick={handleOpen}>
                      <IconButton aria-label="delete">
                          <FaSearch className="icon"/>
                      </IconButton>
                    </Tooltip> 
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                          <Search/>
                      </Box>
                    </Modal>
                  </>
                : null
              }
              <UserAction/>
            </div>
        </div>
    );
}

export default memo(Header);