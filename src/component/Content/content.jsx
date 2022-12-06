import {useContext} from "react"

import styles from "./content.module.scss"
import VideoCard from "../VIdeoCard/videoCard"
import { VideoContext } from "../../videoContext";

function Content() {
    const dataCard = useContext(VideoContext)
    return ( 
    <div className={styles.wrapper}>
         {dataCard.listCard.map(item => {
            return (
                <VideoCard key={item.etag} data={item.snippet} idVideo={item.id.videoId}/>
            ) 
         })}
    </div> 
    );
}

export default Content;