
import styles from "./content.module.scss"
import VideoCard from "../VIdeoCard/videoCard"
import { useEffect, useState } from "react";
import {fetchingAPI} from "../../fetchingAPI";

function Content() {
    const [listCard,setListCard] = useState([])
    useEffect(() => {
        fetchingAPI('search?part=snippet&channelType=any&maxResults=78')
            .then(res => {
                setListCard(res.items)
                console.log(res)
            })
            .catch(error => console.log(error))
    },[])
    return ( 
    <div className={styles.wrapper}>
         {listCard.map(item => {
            return (
                <VideoCard key={item.etag} data={item.snippet} idVideo={item.id.videoId}/>
            ) 
         })}
    </div> 
    );
}

export default Content;