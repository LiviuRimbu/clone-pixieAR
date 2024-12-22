import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import DetectRotation from '@/components/detect-rotation';

interface IframeVideoProps {
    id: string;
}

const IframeVideo: React.FC<IframeVideoProps> = ({ id }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        if (iframeRef.current) {
            const player = new Player(iframeRef.current);

            // Listen for the 'loaded' event (when the player is initialized)
            player.on('loaded', () => {
                console.log('Player is initialized');
                // Set some loading state here if necessary
            });

            // Listen for 'bufferstart' (indicates video is buffering)
            player.on('bufferstart', () => {
                console.log('Buffering started');
            });

            // Listen for 'bufferend' (indicates the video is ready to play)
            player.on('bufferend', () => {
                console.log('Buffering ended - Video is ready to play');
                setShowAnimation(false); // Hide animation and show play button
            });

            // Optional: Listen for 'play' to confirm video is playing
            player.on('play', () => {
                console.log('Video is playing');
            });

            return () => {
                player.off('loaded');
                player.off('bufferstart');
                player.off('bufferend');
                player.off('play');
            };
        }
    }, []);


    const handleLandscape = () => {
        setIsLandscape(true);
    };

    const handlePortrait = () => {
        setIsLandscape(false);
    };

    return (

        <div
            className={`flex items-center justify-center ${
                isLandscape ? ' w-[100vw] h-[100%]' : 'w-[90vw] h-[80vw]'
            } top-[15vh] left-[5vw] z-[100]`}
        >

            <DetectRotation onLandscape={handleLandscape} onPortrait={handlePortrait} />
            {showAnimation && (
                <DotLottieReact
                    src="https://lottie.host/1d46e4e2-27a1-4946-8771-a04e43db74e7/otGsh2IPrk.lottie"
                    loop
                    autoplay
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3  w-[300px] h-[300px]`}
                />
            )}

            <iframe
                ref={iframeRef}
                src={`https://player.vimeo.com/video/${id}&badge=0&autopause=0&player_id=1&app_id=58479&byline=0&title=0&portrait=0&dnt=1&autoplay=1&quality=360p&api=1`}
                onLoad={() => setShowAnimation(true)}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                className={`${
                    isLandscape ? 'w-full h-full object-cover' : 'min-w-[300px] w-[90vw] h-[50vw]'
                } rounded-lg shadow-lg`}
            ></iframe>
        </div>
    );
};

export default IframeVideo;