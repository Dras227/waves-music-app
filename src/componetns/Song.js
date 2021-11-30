import React from 'react'

export default function Song(props) {
    const {
        currentSong
    } = props;
    return (
        <div className="song-container">
            <img alt = {currentSong.name} src={currentSong.cover} alt="" />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    
    )
}
