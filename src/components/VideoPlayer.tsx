import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

interface Props {
    src:string,
}

export const VideoPlayer = ({src}: Props) => {
    
    const videoRef = useRef<HTMLVideoElement>(null);
    
    const [isPlay, setPlay] = useState(false);
    
    
    const handlePlay = () => {
        setPlay(!isPlay);
    }
    
    useEffect(():void => {
        const video = videoRef.current;
        if (!video) return;
        if (isPlay) {
            video.play();
        } else {
            video.pause();
        }

    }, [isPlay]); 
    
    return <>
        <video ref={videoRef} loop playsInline src={src}></video>
        {isPlay ? <button onClick={handlePlay}>Pause</button>: <button onClick={handlePlay}>Play</button>}
    </>
}