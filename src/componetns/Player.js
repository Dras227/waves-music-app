import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,
        faAngleLeft,
        faAngleRight,
        faPause
    } from '@fortawesome/free-solid-svg-icons'

export default function Player(props) {
    const {
        setIsPlaying,
        isPlaying,
        currentSong,
        audioRef,
        songInfo,
    setSongInfo,
    } = props;

    
    function formatMinutes(time) 
    {
        return(
            Math.floor(time/60) + ":" +("0" + Math.floor(time%60)).slice(-2)
        )
    }
    const onTimeUpdateHandler = (e) =>{
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({...songInfo,currentTime: currentTime,duration});
    }
    
    const handlePlay = () =>
    { 
        console.log(isPlaying)
        if(isPlaying)
        {
            audioRef.current.pause(); 
            setIsPlaying(!isPlaying);
        }
        else 
        {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }

        
    };

    const dragHandler = (e) => {
        setSongInfo({...songInfo,currentTime:e.target.value});
        audioRef.current.currentTime = e.target.value
        console.log(e.target.value)
    }
    const handleSkipBack = () =>
    {

    }

    const handleSkipForward = () =>
    {
                
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{formatMinutes(songInfo.currentTime)}</p>
                <input 
                    type="range" 
                    min = {0}
                    max = {songInfo.duration || 0}
                    value = {songInfo.currentTime}
                    onChange = {dragHandler}
                />
                <p>{formatMinutes(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon 
                    className= "skipbacck" 
                    onClick={handleSkipBack} 
                    size="2x" 
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon 
                    className= "play" 
                    onClick={handlePlay} 
                    size="2x" 
                    icon={isPlaying?faPause:faPlay}
                />
                <FontAwesomeIcon 
                    className= "play" 
                    onClick={handleSkipForward}
                    size="2x" 
                    icon={faAngleRight}
                />
            </div>
            <audio 
                ref={audioRef} 
                src={currentSong.audio}
                onLoadedMetadata= {onTimeUpdateHandler}
                onTimeUpdate= {onTimeUpdateHandler}
            />
        </div>
    )
}
