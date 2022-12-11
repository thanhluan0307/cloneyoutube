import {useState, useEffect,createContext, useRef} from "react"
import { fetchingAPI } from "./fetchingAPI"

const VideoContext = createContext()

export const categorys = [
    {id:'VN',name:'Vietnam'},
    {id:'DK',name:'Denmark'},
    {id:'NG',name:'Nigeria'},
    {id:'GB',name:'United Kingdom'},
    {id:'HU',name:'Hungary'},
    {id:'ID',name:'Indonesia'},
    {id:'HK',name:'Hong Kong'},
    {id:'SG',name:'Singapore'},
    {id:'IN',name:'India'},
    {id:'US',name:'United States'},
    {id:'MY',name:'Malaysia'},
    {id:'RU',name:'Russia'},
    {id:'UY',name:'Uruguay'},
    {id:'VE',name:'Venezuela'},
    {id:'GH',name:'Ghana'},
    {id:'LY',name:'Libya'},
]
//'NG','GB','HU','ID','HK','SG','IN','US','MY','RU','UY','VE','GH','LY','NO'] 
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
    const data = {
        listCard,
        load,
        setListCard
    }
    return (
        <VideoContext.Provider value={data} >
            {children} 
        </VideoContext.Provider>
    )
}

export {VideoContext,VideoProvider}
