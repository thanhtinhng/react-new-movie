import React, { useState }  from 'react'
// import Button, {OutlineButton} from '../components/button/Button'
import './Home.scss'
// import Modal, {ModalContent} from '../components/modal/Modal'
import Carousel from '../../components/carousel/Carousel'
import SlideList from '../../components/slidelist/SlideList'

const Home = () => {

  // const [showModal, setShowModal] = useState(false);

  return (
    <div className='test'>
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