import {memo, useContext} from "react"

import styles from "./content.module.scss"
import VideoCard from "../VIdeoCard/videoCard"
import { VideoContext } from "../../videoContext";

function Content({check}) {
    const dataCard = useContext(VideoContext)
    return ( 
        <div className={check ? styles.ml240 : styles.ml93}>   
             <div className={styles.wrapper}>
                {dataCard.listCard.map(item => {
                    return (
                        <VideoCard check={check} key={item.etag} data={item} idVideo={item.id}/>
                    ) 
                 })}
            </div> 
        </div>
        
    );
}

export default memo(Content);