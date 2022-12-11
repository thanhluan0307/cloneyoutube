import {  ToggleButton } from '@mui/material'
import { useContext } from 'react'
import { fetchingAPI } from '../../fetchingAPI';
import { VideoContext } from "../../videoContext";

const Category = ({item}) => {
  let dataContext = useContext(VideoContext)
  const videoByCategory = () => {
   
    fetchingAPI(`videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=${item.id}&maxResults=12`)
        .then(res => dataContext.setListCard(res.items))
        .catch(erro => console.log(erro))
  }
  return (
    <ToggleButton
      sx={{textTransform:'none',padding:'100px',marginLeft:'6px',borderRadius:'10px'}}
      value={item.id} key="center">{item.name}</ToggleButton>
  )
}

export default Category
