/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect,createContext, useRef} from "react"
import moment from "moment/moment"
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
    { name: "Indonesia", id: "ID"},
    { name: "Japan", id: "JP"},
    { name: "Korea", id: "KR"},
    { name: "Tây Ban Nha", id: "SP"},
]

export const getFormattedDurationString = (duration) => {
    let formattedDuration = moment.duration(duration).asSeconds();
    formattedDuration = moment.utc(formattedDuration * 1000).format("mm:ss");
  
    // remove leading '0'
    formattedDuration =
      formattedDuration[0] === "0"
        ? formattedDuration.slice(1)
        : formattedDuration;
    return formattedDuration;
  };

function VideoProvider ({children}) {
    const timerID = useRef()
    const [load,setLoad] = useState(false)
    const [listCard,setListCard] = useState([])
    const [nextPage,setNextPage] = useState('')
    const [check,setCheck] = useState(true)
    useEffect(() => {
        fetchingAPI(`videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=UY&maxResults=24&pageToken=${nextPage}`)
            .then(res => {
                setListCard([...listCard,...res.items])
                timerID.current = setTimeout(()=> {
                    setLoad(true)
                },500)
                window.onscroll = function () {
                    if (window.innerHeight + document.documentElement.scrollTop
                    >= (document.documentElement.offsetHeight - 200)  ) {
                        setLoad(false)
                        setNextPage(res.nextPageToken)
                    }
                }
            })
            .catch(error => console.log(error))
        return ()=> clearTimeout(timerID)
    },[nextPage])   
   
    const data = {
        listCard,
        load,
        check,
        setListCard,
        setCheck,
        setLoad
    }

    return (
        <VideoContext.Provider value={data} >
            {children} 
        </VideoContext.Provider>
    )
}

export {VideoContext,VideoProvider}
