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
      {/* Home
      <Button>button</Button>
      <OutlineButton>button</OutlineButton>
      <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal id="testModal" active={showModal}>
                <ModalContent onClose={() => setShowModal(false)}>
                    <h1>Test Modal</h1>
                    <p>This is a test modal content.</p>
                </ModalContent>
            </Modal>
        </div> */}
        <Carousel/>
        <SlideList type='top_rated' category='tv' />
        <SlideList type='top_rated' category='movie' />
    </div>
  )
}

export default Home