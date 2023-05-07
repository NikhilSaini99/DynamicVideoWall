import React, { useState,useEffect } from "react";

import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';
import Form from "./Form";
import VideoInput from "./VideoInput";

const Generate = () => {
  const [numVideos, setNumVideos] = useState(0);
  const [squareArr, setSquareArr] = useState([]);
  const [totalCells,setTotalCells] = useState({cols:0,rows:0})

   useEffect(() => {
    setSquareArr(Array(numVideos).fill(0));
  }, [numVideos]);


  function generateFunction(totalCells,columns,row) {
    setNumVideos(totalCells);
    setTotalCells({...totalCells,cols:columns,rows:row})
  }

    return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '320px calc(100% - 320px)' }} >

        <Form generateFunction={generateFunction} />

        {numVideos>0&&<VideoInput numVideos={numVideos} totalCells={totalCells}/>}
      
      </div>
    </>
  )

}

function App() {
  return (
      <Generate />
  );
}
export default App;
