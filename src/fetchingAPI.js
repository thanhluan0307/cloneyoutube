import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyA2enmhoXftC4ERblL1hDsO7sWoZShFmp8'


export  const fetchingAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`) 
    return data
}

