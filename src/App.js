import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PostPreviews from './features/postPreviews/posts/PostPreviews';
import Header from './features/header/Header';
import Subreddits from './features/subreddits/Subreddits';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<PostPreviews />} />
          <Route path="/hot" element={<PostPreviews page='hot' />} />
          <Route path="/top" element={<PostPreviews page='top' />} />
          <Route path="/new" element={<PostPreviews page='new' />} />
          <Route path="/rising" element={<PostPreviews page='rising' />} />
        </Routes>
      </Router>
      <Subreddits />
    </>
  );
}

export default App;
