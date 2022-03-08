import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PostPreviews from './features/postPreviews/posts/PostPreviews';
import Header from './features/header/Header';
import HotPostPreviews from './features/postPreviews/hotPostPreviews/HotPostPreviews';
import TopPostPreviews from './features/postPreviews/topPostPreviews/TopPostPreviews';
import NewPostPreviews from './features/postPreviews/newPostPreviews/NewPostPreviews';
import RisingPostPreviews from './features/postPreviews/risingPostPreviews/RisingPostPreviews';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostPreviews />} />
        <Route path="/hot" element={<HotPostPreviews />} />
        <Route path="/top" element={<TopPostPreviews />} />
        <Route path="/new" element={<NewPostPreviews />} />
        <Route path="/rising" element={<RisingPostPreviews />} />
      </Routes>
    </Router>
  );
}

export default App;
