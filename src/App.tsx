import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
