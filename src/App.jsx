import React from 'react';
import './App.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AppRoutes from './routes/Routes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, BrowserRouter } from 'react-router-dom';
import "https://kit.fontawesome.com/e319cbe95c.js"

function App() {

  return (
    <div className='global-style'>
      <BrowserRouter>
        <>
          <Header />
          <AppRoutes />
          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
