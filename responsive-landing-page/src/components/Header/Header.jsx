import React from 'react'
import './Header.modules.css'
import HeaderFoot from '../HeaderFoot/HeaderFoot'

import head_rightImg from '../../assets/headerRght.png'
import curve from '../../assets/curve.png'
import cook from '../../assets/cook.png'
import delivery from '../../assets/delivery.png'
import thumbs from '../../assets/thumbs.png'

import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='head_left'>
              <span className='h_subTitle'>Heakthy & Tasty Food</span>
              <div className='w-75 mt-2 h_title'>
                <h1 style={{color:'#FB9431'}}>Achieve Optimal</h1>
                <h1 style={{color:'#3D3F42'}}>Welness</h1>
                <h1 style={{color:'#3D3F42'}}>With our Nutritious</h1>
                <h1 style={{color:'#3D3F42'}}>Meal Plans</h1>
              </div>
              <p className='text-secondary'>
                Discover a world of delicious salad at our online salad paradise. Salad meals are ready to eat in a minutes so save time energy.
              </p>
              <div className='d-flex justify-content-between align-items-start w-50 mt-4'>
                <Button className='bg_login fw-bold border-0'>Order Food</Button>
                <Button className='contact_btn'>Contact Us</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_rightImgContainer">
              <div className="imageContainer d-flex justify-content-between align-items-center shadow-smrounded">
                <img src={head_rightImg} alt="header-image" className='head_rightImg' />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="d-flex">
            <img src={curve} alt="curve" className='curve'/>
          </div>
          <Col md={4}>
            <div className="box">
              <div className="boxContainer d-flex">
                <div>
                  <img src={cook} alt="coock" className='img-fluid' style={{ width:'90%', height:'100%', objectFit:'cover' }} />
                </div>
                <div className=''>
                  <h5 style={{ color:'#3D3F42', fontWeight:'bold' }}>Delicious Food</h5>
                  <p className='text-secondary'>
                    Discover a world of delicious salad at our online salad paradise. Salad meals are ready to eat in a minutes so save time energy.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContainer d-flex">
                <div className=''>
                  <img src={delivery} alt="delivery" className='img-fluid' style={{ width:'90%', height:'100%', objectFit:'cover' }} />
                </div>
                <div className=''>
                  <h5 style={{ color:'#3D3F42', fontWeight:'bold' }}>Fast Delivery</h5>
                  <p className='text-secondary'>
                    Discover a world of delicious salad at our online salad paradise. Salad meals are ready to eat in a minutes so save time energy.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <div className="boxContainer d-flex">
                <div className=''>
                  <img src={thumbs} alt="thumbs" className='img-fluid' style={{ width:'90%', height:'100%', objectFit:'cover' }} />
                </div>
                <div className=''>
                  <h5 style={{ color:'#3D3F42', fontWeight:'bold' }}>
                    Feedback
                    <small className='ms-3 fw-normal me-1'>
                      <i className='fa-solid fa-star star'></i>
                      4.8 (14.5k)
                    </small>
                  </h5>
                  <p className='text-secondary'>
                    Discover a world of delicious salad at our online salad paradise. Salad meals are ready to eat in a minutes so save time energy.  
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header