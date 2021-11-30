import React from 'react'

export default function LibrarySong(props) {
    const {
        song,
        setCurrentSong,
        audioRef ,
        songInfo ,
        setSongInfo ,
        isPlaying,
        songs,
        setSongs
    } = props;

    const songChangeHandler = () => {
       
        const selectedSong = song;
        console.log(selectedSong);
        setCurrentSong(selectedSong);
        
        const newSongs = songs.map( (s) => {
            if(s.id === song.id)
            {
                return {
                    ...s,
                    active:true,
                }
            }
            else 
            {
                return {
                    ...s,
                    active:false,
                }
            }
        })

        setSongs(newSongs);
        setSongInfo(...songs,newSongs)
        if(isPlaying)
        {
            const playPromise = audioRef.current.play();

            if(playPromise!==undefined)
            {
                playPromise.then((audio) =>{
                    audioRef.current.play();
                })
            }
        }
    }
    return (
        
        <div 
            className={`library-song ${song.active?'selected':""}`}
            onClick = {songChangeHandler}
        >
        <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
        </div>
        <img alt = {song.name} src={song.cover} alt="" />

        </div>
        
    )
}
