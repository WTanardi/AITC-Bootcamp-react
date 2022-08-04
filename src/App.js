import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Form from './routes/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='form' element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
