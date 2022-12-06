
import styles from "./content.module.scss"
import VideoCard from "../VIdeoCard/videoCard"
import { useEffect } from "react";
import axios from "axios";

function Content() {
    useEffect(() => {

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
  params: {playlistId: 'RDZiQo7nAkQHU', part: 'snippet', maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': 'a1e25045d9msh15cc83894bba552p12dbc1jsn3a13fbd9ed9d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    },[])
    return ( 
    <div className={styles.wrapper}>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
    </div> 
    );
}

export default Content;