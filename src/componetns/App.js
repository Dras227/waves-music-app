import React from 'react';
import { useState } from 'react';
import Song from './Song'
import Player from './Player';
import "../styles/app.scss"
import data from '../util.js'
import Library from './Library';
import { useRef } from 'react';
import Nav from './Nav';
function App() {
  const [songs,setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2]);
 const [isPlaying,setIsPlaying] = useState(false);
  const [libraryStatus,setLibraryStatus] = useState(false);
   
      
  const [songInfo,setSongInfo] = useState({
        currentTime:undefined,
        duration:undefined
    });
   const audioRef = useRef(songInfo.currentTime);
  return (
    <div className="App">
      <Nav
        libraryStatus = {libraryStatus}
        setLibraryStatus = {setLibraryStatus}
      />
      <Song currentSong = {currentSong} />
      <Player 
      setIsPlaying = {setIsPlaying}
      isPlaying = {isPlaying}
      currentSong = {currentSong}   
      audioRef = {audioRef}
      songInfo = {songInfo}
      setSongInfo = {setSongInfo}
        />   
        {(() =>{
            if(libraryStatus)
            {
              return (
                <Library
            songs = {songs}            
            setCurrentSong = {setCurrentSong}
            audioRef = {audioRef}
            songInfo = {songInfo}
            setSongInfo = {setSongInfo}
            isPlaying = {isPlaying}
            setSongs = {setSongs}
            />)
            }
            
          })()
        }
    </div>
  );
}

export default App;
