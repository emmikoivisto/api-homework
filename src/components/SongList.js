import SongDetail from './SongDetail';
import './Songs.css';

const SongList = ({songs, loaded}) => {

    if(!loaded){
        return <p>Loading</p>
    }

    const songListItems = songs.map((song, index) => {
        return (
            <SongDetail song={song} position={index + 1}/>
        )
    })

    return (
        <div className="songs">
            <h1>iTUNES UK TOP 20</h1>
            <ul>
                {songListItems}
            </ul>
        </div>
    )
}

export default SongList;