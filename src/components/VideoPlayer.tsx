import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

interface Props {
    src:string,
}

export const VideoPlayer = ({src}: Props) => {
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const video = videoRef.current;

    const [isPlay, setPlay] = useState(false);

    const handlePlay = () => {
        setPlay(!isPlay);
        console.log(isPlay);
    }

    useEffect(():void => {
        if (isPlay && video) {
            video.pause();
        } else if (video) {
            video.play();

        }

    }, [isPlay]); 
    return <>

        <video ref={videoRef} loop playsInline src={src}></video>
        {isPlay ? <button onClick={handlePlay}>Play</button>: <button onClick={handlePlay}>Pause</button>}
        
    </>
}