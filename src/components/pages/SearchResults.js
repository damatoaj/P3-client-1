import SongSearch from '../partials/SongSearch';
import axios from 'axios';
import { useState } from 'react';


const SearchResults = (props) => {
    const [playlist, setPlaylist] = useState('');
    var playlistButtonText = "Add to you Playlist";
    let songList;

    const addSongPL = (song, playlist) => {
        console.log(song)
        axios.post(
          `${process.env.REACT_APP_SERVER_URL}/songs`,
          { playlist:playlist, name:song.name, uri:song.uri, spotify_id:song.id}
        ).then(response => {
          console.log(response.data)
          plyalistButtonText = "Song Added";
        }).catch(err => console.log(`UPDATE PLAYLIST ERROR 🤬`, err));
      };
  

    if (props.content.length > 0) {
        songList = props.content.map((song, i) => (
            <li className="song-card">
                <form>
                    <div>
                        <h4 id="select-title">Select Playlist</h4> 
                        <select onChange={e => setPlaylist(e.target.value)}>
                        {props.playlist.playlists.map((p, i) => {
                            return <option key={i} value={p._id}>{p.title}</option>
                        })};
                        </select>
                    </div>
                </form>
                <h3 className="song-title" key={i}>{song.name}</h3>
                <button className="button" id="button-playlist" type="submit" onClick={() => addSongPL(song, playlist)}>{playlistButtonText}</button >
            </li>
        ))
    } else {
        <h1>Loading</h1>
    }

    return (
        <div className="container">
            <div className="inner-container">
                <h1>THIS IS WHAT WE COULD FIND</h1>
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
                <SongSearch songList={songList} />
            </div>
        </div>
    );
}

export default SearchResults;