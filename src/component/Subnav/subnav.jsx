import {categorys, VideoContext} from '../../videoContext'
import React, { memo, useContext, useState } from 'react'
import styles from "./subnav.module.scss"


import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { fetchingAPI } from '../../fetchingAPI'
const Subnav = () => {
  const [alignment, setAlignment] = useState('VN');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  let dataContext = useContext(VideoContext)
  const videoByCategory = (value) => {
   
    fetchingAPI(`videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=${value}&maxResults=12`)
        .then(res => dataContext.setListCard(res.items))
        .catch(erro => console.log(erro))
  }
 
  return (
    <div className={styles.wrapper}>
        <ToggleButtonGroup
            className={styles.btn}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
      {categorys.map((item) => {
        return (
        <ToggleButton 
          key={item.id}
          onClick={() => videoByCategory(item.id)}
          value={item.id}
        >
          {item.name}
        </ToggleButton>
        )
      })}
       </ToggleButtonGroup>
    </div>
  )
}

export default memo(Subnav)