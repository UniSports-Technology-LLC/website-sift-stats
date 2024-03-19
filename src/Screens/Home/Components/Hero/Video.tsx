import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import { imagePaths } from '../../../../assets/imagePaths';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playingFromThumbnail, setPlayingFromThumbnail] = useState<boolean>(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
      videoRef.current.addEventListener('ended', handleVideoEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
      setPlayingFromThumbnail(true);
    }
  };

  const handlePlay = () => {
    if (playingFromThumbnail) {
      setPlayingFromThumbnail(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
        <Box
          sx={() => ({
            mt: { xs: 8, sm: 10},
            height: { xs: 200, sm: 500 },
            width: { xs: '100%', sm: 885 },
            borderRadius: '10px',
          })}
        >
            <video
                ref={videoRef}
                onPlay={handlePlay}
                width="100%"
                height="100%"
                controls
                controlsList='nodownload'
                style={{
                border: '2px solid #233885',
                borderRadius: '10px',
                }}
            >
                <source src={imagePaths.video} type="video/mp4" />
                Your browser does not support the video.
            </video>
        </Box>
    );
}
