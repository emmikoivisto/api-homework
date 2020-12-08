import SongList from './SongList';

const SongDetail = ({song}) => {


    return (
        <>
            <h2>Title: {song["im:name"].label}</h2>
            <p>Artist: {song["im:artist"].label}</p>
        </>
    )
}

export default SongDetail;