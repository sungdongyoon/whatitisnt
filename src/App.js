import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Components/Header';
import Main from './Components/Main';
import ProductAll from './Components/ProductAll';
import Login from './Components/Login';
import ProductDetail from './Components/ProductDetail';
import PrivateRouter from './Components/PrivateRouter';
import Footer from './Components/Footer';
import AsideBtn from './Components/AsideBtn';

function App() {
  const [authentic, setAutentic] = useState(false);
  return (
    <div>
      <Header authentic={authentic} setAutentic={setAutentic}/>
      <AsideBtn/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login setAutentic={setAutentic}/>}/>
        <Route path='/productAll' element={<ProductAll/>}/>
        <Route path='/products/:id' element={<PrivateRouter authentic={authentic}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
