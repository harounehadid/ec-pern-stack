import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
