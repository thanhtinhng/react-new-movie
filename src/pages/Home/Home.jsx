import React from 'react'
import './Home.scss'
import Carousel from '../../components/carousel/Carousel'
import SlideList from '../../components/slidelist/SlideList'
import { OutlineButton } from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home_container'>

        <Carousel/>

        <div className='slide-container'>
          <div className="slide-header">
            <h2>TV Shows Được Yêu Thích</h2>
            <OutlineButton 
              className="view-more" 
              onClick={() => navigate('/tv')}
            >
              Xem Thêm
            </OutlineButton>
          </div>
          <SlideList type='top_rated' category='tv' />
        </div>

        <div className='slide-container'>
          <div className="slide-header">
            <h2>Phim Lẻ Được Yêu Thích</h2>
            <OutlineButton 
              className="view-more" 
              onClick={() => navigate('/movie')}
            >
              Xem Thêm
            </OutlineButton>
          </div>
          <SlideList type='top_rated' category='movie' />
        </div>
        
    </div>
  )
}

export default Home