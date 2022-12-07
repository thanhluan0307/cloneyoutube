import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyBkaMX7XmQrzaK4TY2GWhMfrFmKZUzEV2U'


export  const fetchingAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`) 
    return data
}

