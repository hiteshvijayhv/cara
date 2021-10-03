import React, { useState } from 'react'
import rain from '../resources/rain.mp3'


function SoundPage() {

    const [isPlaying, setIsPlaying] = useState(false)
    const audio = new Audio(rain)

    const playPause = () => {
        console.log('button clicked')
       
         audio.play();
      };

    return (
        <div>

        {/* Button to call our main function */}
        <button onClick={() => playPause()}>
          Play | Pause
        </button>
        </div>
    )
}

export default SoundPage
