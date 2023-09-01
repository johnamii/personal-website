import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { ScrollRestoration } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
import Playground from './pages/Playground/Playground'
import { BackToTop } from './components'

import './App.css'

function App() {

  return (
    <div className="app">
      <Router>
        {/* <ScrollRestoration /> */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path='/playground' element={<Playground/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
