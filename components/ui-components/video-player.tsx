import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const playerRef = useRef(null);
    const [videoControl, setVideoControl] = useState<boolean>(false);
    const [youtubeIcon, setVideoIcon] = useState<boolean>(false);
    const [showBottomDiv, setShowBottomDiv] = useState<boolean>(false)


    const playHalder = (): void => {
        setVideoControl(true);
        setVideoIcon(true);
        setShowBottomDiv(true)
    }

    return (
        <>
            <div className='mutual-fund-component-video-one'>
                <ReactPlayer
                    ref={playerRef}
                    controls={videoControl}
                    url={"/icons/fin.mp4"}
                    width={'100%'}
                    height='100%'
                    style={{borderRadius: "15%"}}
                />
                <img
                    src={"/icons/youtube.svg"}
                    alt="youtube"
                    className={youtubeIcon ? "youtube-icon-style-active" : "youtube-icon-style"}
                    style={{ position: "absolute", top: "3rem", left: "7.6rem" }}
                    onClick={() => { playHalder() }}
                />
                <div className={showBottomDiv ? 'video-bottom-div-active' : 'video-bottom-div'}>
                    Future of Investments
                </div>
            </div>
            <style jsx global>
                {`
                .mutual-fund-component-video-one{
                    width: 300px;
                    height: 200px;
                    margin: 20px auto;
                    position: relative;
                    cursor: pointer;
                }
                .youtube-icon-style-active{
                    display: none;
                    visibility: hidden;
                }
                .youtube-icon-style{
                    position: absolute;
                    top: 40px;
                    width: 55px;
                    height: 55px;
                }
                .video-bottom-div-active{
                    display: none;
                    visibility: hidden;
                }
                .video-bottom-div{
                    background: rgba(0, 0, 0, 0.4);
                    box-shadow: 0px -3px 12px rgba(0, 0, 0, 0.1);
                    position: absolute;
                    bottom: 0.95rem;
                    width: 93.1%;
                    height: 2.3rem;
                    color: white;
                    font-weight: 700;
                    font-size: 16px;
                    padding: 10px;
                }
                `}
            </style>
        </>
    )
}

export default VideoPlayer;