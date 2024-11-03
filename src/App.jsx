import React from 'react';
import './App.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import AppRoutes from './routes/Routes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, BrowserRouter } from 'react-router-dom';

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
