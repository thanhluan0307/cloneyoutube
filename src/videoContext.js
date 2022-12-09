import {useState, useEffect,createContext, useRef} from "react"
import { fetchingAPI } from "./fetchingAPI"

const VideoContext = createContext()

function VideoProvider ({children}) {
    const [listCard,setListCard] = useState([])
    const [load,setload] = useState(false)
    let timerID = useRef()
    useEffect(() => {
        fetchingAPI('videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=VN&maxResults=12')
            .then(res => {
                setListCard(res.items)
                timerID.current = setTimeout(()=> {
                    setload(true)
                },1000)
            })
            .catch(error => console.log(error))
        return ()=> clearTimeout(timerID)
    },[])
    console.log(listCard)
    const data = {
        listCard,
        load
    }
    return (
        <VideoContext.Provider value={data} >
            {children} 
        </VideoContext.Provider>
    )
}

export {VideoContext,VideoProvider}