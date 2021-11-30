import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
export default function Nav(props) {
    const {
        libraryStatus,
        setLibraryStatus
    } = props;

    
    return (
        <nav>
            <h1>Waves</h1>
            <div>
                <button
                onClick = {() => {setLibraryStatus(!libraryStatus)}}
                >
                <FontAwesomeIcon 
                    icon = {faMusic}
                />
                
            </button>
            </div>
        </nav>
    )
}
