import React, { useContext } from 'react'

import VideoSmall from '../VideoSmall/videoSmall'
import { VideoContext } from "../../videoContext";

const ListVideo = () => {
  const {listSeachVideo,listCard} = useContext(VideoContext)
  console.log(11,listSeachVideo)
  return (
    <div style={{ flex: 1}}>
         {listSeachVideo.length > 0  ? (
          listSeachVideo.map(item => {
            return (
                <VideoSmall key={item.etag} data={item.snippet} idVideo={item.id.videoId}/>
            ) 
         })
         ) : (
          listCard.map(item => {
            return (
              <VideoSmall key={item.etag} data={item.snippet} idVideo={item.videoId}/>
            )
          })
         )}
    </div> 
  )
}

export default ListVideo