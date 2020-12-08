import { useEffect, useState } from "react";
import SongDetail from "../components/SongDetail";

const SongsContainer = () => {

    const [songs, setSongs] = useState([]);

    const getSongs = () => {
        console.log("getting songs")
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(data => setSongs(data))
    }

    useEffect(() => {
        getSongs();
    }, [])


    return (
        <>
            <p>This is the song container</p>
            <SongDetail/>
        </>
    )
}

export default SongsContainer;