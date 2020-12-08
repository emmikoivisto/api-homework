import { useEffect, useState } from "react";
import SongDetail from "../components/SongDetail";
import SongList from "../components/SongList";

const SongsContainer = () => {

    const [songs, setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log("getting songs")
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs();
    }, [])


    return (
        <>
            <p>This is the song container</p>
            {/* <SongDetail/> */}
            <SongList songs={songs} loaded={loaded}/>
        </>
    )
}

export default SongsContainer;