import {useState, useEffect,createContext} from "react"
import { fetchingAPI } from "./fetchingAPI"

const VideoContext = createContext()

function VideoProvider ({children}) {
    const [listCard,setListCard] = useState([])
    const couter = 0
    useEffect(() => {
        fetchingAPI('search?part=snippet&channelType=any&maxResults=80')
            .then(res => {
                setListCard(res.items)
                
            })
            .catch(error => console.log(error))
    },[couter])
    const data = {
        listCard,
        couter
    }
    return (
        <VideoContext.Provider value={data} >
            {children} 
        </VideoContext.Provider>
    )
}

export {VideoContext,VideoProvider}