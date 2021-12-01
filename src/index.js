import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
