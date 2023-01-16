import React from 'react'
import Navbar from './Navbar'
import { Row, Col } from 'antd'
import '../Component/Home.css'


const Home = () => {
  return (
    <div className='homepage'>
     

    <div >
      <Row className='home'>
        <Col span={11} className="col1">

         <div className='content'>
     
            <h1 className='head1'>IOT BASED</h1>
            <p className='head2'>Energy Monitoring System</p>
         

        
            <h1 className='head1'>Save Power Cost by
              15% to 20%</h1>

              <button className='btn'>Know More</button>
          
          </div>



        </Col>


        <Col span={8} className="col2" >
          <img src="./Asset.png" alt="" className='img1' />
        </Col>
      </Row>

      <Row className='number'>
        <Col span={6} style={{fontSize:"2rem"}}>Some Numbers</Col>
        <Col span={6} style={{fontSize:"2rem"}}>100000 <span style={{fontSize:"18px"}}> Sensor</span> </Col>
        <Col span={6} style={{fontSize:"2rem"}}>2000 <span style={{fontSize:"18px"}}> Sites</span> </Col>
        <Col span={6} style={{fontSize:"2rem"}}>20 <span style={{fontSize:"18px"}}> Projects</span> </Col>
      </Row>


      </div>
    

    </div>
  )
}

export default Home