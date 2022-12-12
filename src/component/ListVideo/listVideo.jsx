import React, { useContext } from 'react'

import VideoSmall from '../VideoSmall/videoSmall'
import { VideoContext } from "../../videoContext";

const ListVideo = () => {
  const dataCard = useContext(VideoContext)
  return (
    <div style={{ flex: 1}}>
         {dataCard.listCard.map(item => {
            return (
                <VideoSmall key={item.etag} data={item.snippet} idVideo={item.id}/>
            ) 
         })}
    </div> 
  )
}

export default ListVideo