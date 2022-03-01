import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HotPostPreviews from './features/postPreviews/HotPostPreviews'

function App() {

  return (
    <div className="App">
      <HotPostPreviews />
    </div>
  );
}

export default App;
