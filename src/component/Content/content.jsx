import {useContext} from "react"
import Home from "../../page/Home/home";
import styles from "./content.module.scss"
import VideoCard from "../VIdeoCard/videoCard"
import { VideoContext } from "../../videoContext";
import Subnav from "../Subnav/subnav"

function Content() {
    const dataCard = useContext(VideoContext)
    return ( 
        <Home>
             <div className={styles.wrapper}>
                <Subnav/>
                {dataCard.listCard.map(item => {
                    return (
                        <VideoCard key={item.etag} data={item} idVideo={item.id}/>
                    ) 
                 })}
            </div> 
        </Home>
    );
}

export default Content;