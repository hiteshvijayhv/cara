import React, { useState, useRef } from 'react'
import './Player.css'

function Player({media}) {

    const [isPlaying, setIsPlaying] = useState(false)
    const audio = useRef(new Audio(media))

    const setPlaying = () => {  
        setIsPlaying(isPlaying => !isPlaying)
       
    }

    const playAudio = () => {
     audio.current.play()
     setPlaying()
    }
    const pauseAudio = () => {
        audio.current.pause()
        setPlaying()
    }


    var button;
    if(isPlaying){
        button = <div className='btn' onClick={() => pauseAudio()}><img className='btn-img' src='https://user-images.githubusercontent.com/46933160/135701892-75741b3c-bc93-4ac4-b01a-3b3a51839056.png' /></div>
    } else {
        button = <div className='btn' onClick={() => playAudio()}><img className='btn-img' src='https://user-images.githubusercontent.com/46933160/135701800-fd876852-0488-4063-ac97-7410b693214f.png' /></div>
    }

    return (
        <div className=''>
           {button}
        </div>
    )
}

export default Player
