import React, { useEffect, useRef,useState } from 'react'
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const VideoInput = ({numVideos,totalCells}) => {

  const [isFullScreen,setFullScreen] = useState()
  const videoRef = useRef()
  const inputRefs = React.useRef(
    Array.from({ length: numVideos }, () => React.createRef())
  ).current;

  const [sources, setSources] = React.useState(
    Array.from({ length: numVideos }, () => null)
  );

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    console.log(file);
    const url = URL.createObjectURL(file);

    setSources((prevSources) => {
      const newSources = [...prevSources];
      newSources[index] = url;
      return newSources;
    });
  };

const handleChoose = (index) => {
     inputRefs[index].current.click()
  };

  useEffect(()=>{
    console.log("S")
  },[videoRef])

  //Full screen api
  const handleFullScreenToggle = () => {
    if (!isFullScreen) {
    videoRef.current.requestFullscreen();
    setFullScreen(true);
    } else {
    document.exitFullscreen();
    setFullScreen(false);
    }
    };

  
  return (
    <div >
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(${totalCells.cols}, 250px)`, fontWeight: 'bold',
      gridTemplateRows: `repeat(${totalCells.rows},150px)`, overflowX: 'auto',

    }}>
      {sources.map((item, index) => (
          <div key={index} style={{ border: '1px solid grey', backgroundColor: 'black', position: 'relative' }}  >
            <input
              ref={inputRefs[index]}
              type="file"
              onChange={(event) => handleFileChange(index, event)}
              accept=".mov,.mp4"
              style={{ display: "none" }}
            />
            <IconButton sx={{ backgroundColor: 'grey', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50% ,-50%)', ":hover": { backgroundColor: 'grey' } }}
              onClick={() => handleChoose(index)}>
              <AddCircleIcon />
            </IconButton>
            {item && <video
            ref={videoRef}
          id="my-video"
          className="video-js vjs-theme-city"
          controls
          preload="auto"
          width="100%"
          height="100%"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}"
          onClick={handleFullScreenToggle}
        >
          <source src={item} type="video/mp4" />
        </video>}
          </div>
      )
      )}
    </div>
  </div>
  )
}

export default VideoInput
