import React from 'react'
import data from "../util"
import LibrarySong from './LibrarySong';
const dict = data();
export default function Library(props) {

    const {
        songs,
        setCurrentSong,
        audioRef ,
        songInfo ,
        setSongInfo ,
        isPlaying,
        setSongs
    } = props;

    return (
        <div className="library">
            <h1 >Library</h1>
            <div className="library-songs">
                {songs.map(song => {
                    return (
                        <LibrarySong 
                               songs = {songs}
                               song={song}
                               setCurrentSong = {setCurrentSong}
                               key = {song.id}
                               audioRef = {audioRef}
                               songInfo = {songInfo}
                            setSongInfo = {setSongInfo}
                            isPlaying = {isPlaying}
                            setSongs = {setSongs}
                        />
                    )
                })}
            </div>
        </div>
    )
}
