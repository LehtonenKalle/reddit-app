import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PostPreviews from './features/postPreviews/posts/PostPreviews';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <PostPreviews />
    </div>
  );
}

export default App;
