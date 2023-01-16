import React from 'react'
import '../Component/Products.css'
import { Row, Col } from 'antd'

const Products = () => {
    return (
        <div className='Product'>
            <Row className='productRow'>
                <Col span={11} className="" style={{margin:"0px 0px 55px 0px"}} >

                    <Row>
                        <img src="./scanner.svg" alt="" className='productimg'/>
                    </Row>

                    <Row className='productname'>
                        <p >Access Control </p> 
                    </Row>
                    <Row className='productdesc'>
                        Our IoT Based Energy Monitoring System has saved people up to 25% off their electricity bills by raising their awareness.
                    </Row>

                    <Row className='productbtn'>
                        <p>Know More <span className='arrow'>→</span></p>
                    </Row>

                </Col>
                <Col span={12} className="productRow1">
                    <Row className='product1'>
                    PRODUCTS
                    </Row>
                    <hr style={{marginRight:"30%", borderTop: "1px solid red"}} />
                    <Row className='productdesc2'>
                        <p>We build readymade websites, mobile applications, and elaborate <br /> online business services.</p>
                    </Row>

                    <Row>
                          <ul >
                            <li className='list'>Energy Saving</li>
                            <li className='list'>AMC Services</li>
                            <li className='list'>Access Control</li>
                            <li className='list'>Centralized Remote Monitoring</li>
                          </ul>
                    </Row>

                    <Row> 

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Products