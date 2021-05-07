const PlaylistCard = (props) => {


    return (
        <div>
            <h1>This is the playlist card</h1>
            {props.playlistList}
        </div>

    );
}

export default PlaylistCard;