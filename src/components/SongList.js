import SongDetail from './SongDetail';

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
        <>
            <ul>
                {songListItems}
            </ul>
        </>
    )
}

export default SongList;