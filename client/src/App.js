import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import { ProductsContextProvider } from './context/ProductsContext';

const App = () => {
  return (
    <ProductsContextProvider>
      <Router>
        <Routes>
          <Route index exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </ProductsContextProvider>
  );
}

export default App;
