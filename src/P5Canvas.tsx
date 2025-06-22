import { type P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let video: any;
  let playing = false;
  const asciiPalette = [
    " ", ".", ",", ":",
    "-", "/", "+", "?",
    "=", "*", "$", "%",
    "&", "0", "#", "@"
  ]


  p5.setup = () =>
  {
    p5.createCanvas(window.innerWidth, window.innerHeight);
  }

  p5.updateWithProps = (props: any) => {
    if (props.videoFile) {
      video = p5.createVideo([props.videoFile]);
      video.size(p5.width, p5.height);
      video.hide();
    }

  }

  p5.draw = () => {
    p5.background(255)
    if (!video) return;
    let gridSize = 10;
    video.loadPixels();
    for (let y=0; y<video.height; y+=gridSize) {
      for (let x=0; x<video.width; x+=gridSize) {
        let index = (y * video.width + x) * 4;
        let greyValue = Math.floor(15 - ((video.pixels[index]*0.299+video.pixels[index+1]*0.587+video.pixels[index+2]*0.114))/16);
        p5.fill(0);
        p5.text(asciiPalette[greyValue], x, y);
        p5.textSize(gridSize)
  };
}
  }
  p5.mousePressed = () => {
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.loop();
    }
    playing = !playing;
  }
}

const P5Canvas = (props: {videoFile?: string}) => {
  return (
    <ReactP5Wrapper sketch={sketch} videoFile={props.videoFile}/>
  )
}

export default P5Canvas
