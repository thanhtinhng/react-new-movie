import React, { useState }  from 'react'
// import Button, {OutlineButton} from '../components/button/Button'
import './Home.scss'
// import Modal, {ModalContent} from '../components/modal/Modal'
import Carousel from '../components/carousel/Carousel'

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
    </div>
  )
}

export default Home