import React from 'react';
import UploadImage from './components/UploadImage';
import GetGraph from './components/GetGraph';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 className="large text-center m">Lab Report Digitization</h1>
      <UploadImage />
      <GetGraph />
    </div>
  );
}

export default App;
