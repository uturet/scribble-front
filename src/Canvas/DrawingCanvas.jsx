import React, { useRef, useState, useEffect } from 'react';

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [currentTool, setCurrentTool] = useState('brush');
  const [strokeStyle, setStrokeStyle] = useState("black");
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };


  const handleColorChange = (newColor) => {
    setStrokeStyle(newColor);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const scaleFactor = window.devicePixelRatio;

    // Set canvas size
    canvas.width = 600 * scaleFactor;
    canvas.height = 400 * scaleFactor;

    // Scale the canvas down with CSS to the intended display size
    canvas.style.width = '600px';
    canvas.style.height = '400px';

    // Scale the context to account for the higher resolution
    context.scale(scaleFactor, scaleFactor);

    // Set the canvas background color to white
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', endDrawing);
  }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      setContext(ctx);
    }
  }, []);

  const handleTouchStart = (e) => {
    startDrawing(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    draw(e.touches[0]);
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    context.lineWidth = (sliderValue) * 5; // Set the line width
    context.lineCap = 'round'; // Set the line cap style
    context.strokeStyle = strokeStyle; // Set the stroke color
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const [lastX, setLastX] = useState(null);
  const [lastY, setLastY] = useState(null);

  const draw = (e) => {
    if (!isDrawing) return;
  
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
  
    context.lineWidth = (sliderValue) * 5; // Set the line width
    context.lineCap = 'round'; // Set the line cap style
    context.strokeStyle = strokeStyle; // Set the stroke color
  
    if (lastX !== null && lastY !== null) {
      // Draw a quadratic curve from the previous point to the current point
      context.quadraticCurveTo(lastX, lastY, (x + lastX) / 2, (y + lastY) / 2);
      context.stroke();
    }
  
    setLastX(x);
    setLastY(y);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    context.closePath();

    setLastX(null);
    setLastY(null);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
    ctx.fillStyle = 'white'; // Reset background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const changeTool = (type) => {
    setCurrentTool(type);

    setStrokeStyle(type === 'erase' ? 'white' : 'black');
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={600}
        height={400} 
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      />

      

      <div className='sribble-tools-box'>
      
        <button onClick={clearCanvas} className='circle-button scribble-button scribble-tools'>
          clear
        </button>


        <div className='drawing-tools'>
            <div id="eraser" className={`circle-button ${currentTool === 'erase' ? 'selected' : ''}`} onClick={() => changeTool('erase')}>
              <img src='../public/erase.png' alt='Eraser' />
            </div>
            <div id='brush' className={`circle-button ${currentTool === 'brush' ? 'selected' : ''}`} onClick={() => changeTool('brush')}>
              <img src='../public/brush.png' alt='Brush' />
            </div>
          </div>
        </div>

        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="5"
            value={sliderValue}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>

        <div className='pen-editor'>
          <div className='colors'>
            <div className='color black' onClick={() => handleColorChange('black')}></div>
            <div className='color gray' onClick={() => handleColorChange('gray')}></div>
            <div className='color white' onClick={() => handleColorChange('white')}></div>
            <div className='color red' onClick={() => handleColorChange('red')}></div>
            <div className='color orange' onClick={() => handleColorChange('orange')}></div>
            <div className='color yellow' onClick={() => handleColorChange('yellow')}></div>
            <div className='color green' onClick={() => handleColorChange('green')}></div>
            <div className='color blue' onClick={() => handleColorChange('blue')}></div>
            <div className='color indigo' onClick={() => handleColorChange('indigo')}></div>
            <div className='color violet' onClick={() => handleColorChange('violet')}></div>
          </div>
        </div>

        
    </>
  );
}

export default DrawingCanvas;