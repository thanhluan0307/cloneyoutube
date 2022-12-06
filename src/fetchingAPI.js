import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyB4CBGBMjXsvT_Od_PQlMjiUwCt06vPjSk'

export  const fetchingAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`) 
    return data
}
