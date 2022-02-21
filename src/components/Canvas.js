import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function Canvas({selectedColor,selectedLineSize}) {

  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [mouseDown,setMouseDown] = useState(false);
  const [lastPosition,setPosition] = useState({
      x:0,
      y:0
  })

  useEffect(() => {
    if(canvasRef.current){
        ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x,y) => {
    if(mouseDown){
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = selectedLineSize;
        ctx.current.lineJoin = 'round';
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x,y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
            x,
            y
        })
    }
  },[lastPosition,mouseDown,selectedColor,selectedLineSize,setPosition])


  const clear = () => {
      ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const download = async () => {
      const image = canvasRef.current.toDataURL('image/png');
      const blob = await(await fetch(image)).blob();
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = 'image.png';
      link.click();
  }

  const onMouseDown = (e) => {
        setPosition({
            x: e.pageX,
            y: e.pageY
        })
        setMouseDown(true)
  }
  const onMouseUp = (e) => {
        setMouseDown(false)
  }
  const onMouseMove = (e) => {
        draw(e.pageX,e.pageY)
  }
 
  
  //console.log(mouseDown,lastPosition);

  return <div style={{
      cursor: 'crosshair'
      
  }}>
    
      <canvas
        style={{
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
        }}
        width={1250}
        height={650} 
        ref={canvasRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        
      />

    <div style={{textAlign: 'center'}}>
        <button onClick={clear} style={{
          padding: '12px',
          width: '100px',
          background: 'white',
          border: 'none',
          borderRadius: '5px',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
          margin: '5px',
          cursor: 'pointer'
        }}>Clear</button>
        
        <button onClick={download} style={{
          padding: '12px',
          width: '100px',
          background: 'white',
          border: 'none',
          borderRadius: '5px',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
          margin: '5px',
          cursor: 'pointer'
        }}>Download </button>

        
    </div>
    
  </div>;
}
