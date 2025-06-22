import './App.css'
import P5Canvas from './P5Canvas'
import React, { useState } from 'react';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const App: React.FC = () => {
  const [videoFile, updateVideoFile] = useState('')

  const props: UploadProps = {
    beforeUpload: (file) => {
      const videoURL = URL.createObjectURL(file);
      updateVideoFile(videoURL);
      return false;
    },
    onChange(info) {
      if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div id="container">
      <P5Canvas videoFile={videoFile}/>
      <Upload {...props}>
        <Button id="overlay">Upload Video</Button>
      </Upload>

    </div>
  );}

export default App;
