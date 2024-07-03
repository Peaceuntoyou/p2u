import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import './index.css';
import Contact from './Contact'

function App() {

  return (
    <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
