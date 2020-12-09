
const SongDetail = ({song}) => {

    return (
        <>
            <h2>{song["im:name"].label}</h2>
            <p>Artist: {song["im:artist"].label}</p>
        </>
    )
}

export default SongDetail;