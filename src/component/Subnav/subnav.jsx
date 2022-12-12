import React, { memo, useContext, useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

import styles from "./subnav.module.scss"
import { fetchingAPI } from '../../fetchingAPI'
import {categorys, VideoContext} from '../../videoContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    neutral: {
      main: '#6200ea',
      contrastText: '#ff9800',
    },
  },
});

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
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup color="neutral"
          sx={{justifyContent:'space-between',width:'100%',height: '34px'}}
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          {categorys.map((item) => {
          return (
            <ToggleButton
              sx={{
                minWidth: 'max-content',
                marginRight:'10px',
                textTransform:'none',
                borderRadius: '10px !important',
                border: 'none',
                color: 'black',
                backgroundColor: 'rgba(0,0,0,0.1)'
              }}
              key={item.id}
              onClick={() => videoByCategory(item.id)}
              value={item.id}
            >
              {item.name}
            </ToggleButton>
          )
          })}
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  )
}

export default memo(Subnav)