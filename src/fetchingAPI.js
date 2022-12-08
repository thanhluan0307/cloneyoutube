import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyCa8yQuF_VWNy0U4BxUIB1BEKqjjScv5LAp'


export  const fetchingAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`) 
    return data
}

