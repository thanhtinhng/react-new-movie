import React, { useState }  from 'react'
import './Home.scss'
import Carousel from '../../components/carousel/Carousel'
import SlideList from '../../components/slidelist/SlideList'

const Home = () => {
  return (
    <div className='home_container'>
        <Carousel/>
        <div className='slide-container'>
          <h2>TV Shows Được Yêu Thích</h2>
          <SlideList type='top_rated' category='tv' />
        </div>
        <div className='slide-container'>
          <h2>Phim Lẻ Được Yêu Thích</h2>
          <SlideList type='top_rated' category='movie' />
        </div>
    </div>
  )
}

export default Home