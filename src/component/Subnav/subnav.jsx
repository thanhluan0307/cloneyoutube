import React, { memo, useContext, useState } from 'react'
import { ToggleButton,  } from '@mui/material'

import { fetchingAPI } from '../../fetchingAPI'
import {categorys, VideoContext} from '../../videoContext'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./subnav.module.scss"


const Subnav = ({check}) => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const [active,setActive] = useState('UY')
 
  let dataContext = useContext(VideoContext)
  const videoByCategory = (value) => {
    dataContext.setLoad(false)
    fetchingAPI(`videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=${value}&maxResults=24`)
    .then(res => {
          setActive(value)
          dataContext.setLoad(true)
          dataContext.setListCard(res.items)
        })
        .catch(erro => console.log(erro))
  }
 
  return (
    <div className={check ? styles.wrapper : styles.ml30}>
        <Slider {...settings}>
            {categorys.map(item => {
              return (
                <div className={styles.btn}>
                  <ToggleButton value={item.name} key={item.name} className={active === item.id ? styles.active : null} onClick={() => videoByCategory(item.id)} size='small' sx={{border:'none',bgcolor:'#f2f2f2',color:'#0f0f0f',borderRadius: '8px',padding:' 4px 12px'}} >{item.name}</ToggleButton>
                </div>
              )
            })}
        </Slider>
    </div>
  )
}

export default memo(Subnav)