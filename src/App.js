import React from 'react';
import { useState } from 'react';
import Song from './componetns/Song'
import Player from './componetns/Player';
import "./styles/app.scss"
import data from './util.js'
function App() {
  const [songs,setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2]);
 const [isPlaying,setIsPlaying] = useState(false);

  return (
    <div className="App">
      
      <Song currentSong = {currentSong} />
      <Player 
      setIsPlaying = {setIsPlaying}
      isPlaying = {isPlaying}
      currentSong = {currentSong}   
        />   
    </div>
  );
}

export default App;
