import React from 'react'
import { Row, Col } from 'antd'
import '../Component/Services.css'
import Products from './Products'

const Services = () => {
    return (
        <div className='servicepage'>

            <Row className='service'>
                <Col span={11} >
                    <div className='serviceCard'>
                        <h1 style={{fontSize:"50px"}}>SERVICES</h1>
                        <hr style={{marginRight:"2%", borderTop: "1px solid red"}} />
                        <p className='para'>We build readymade websites,
                            mobile applications, and elaborate
                            online business services.</p>
                    </div>
                </Col>
                <Col span={11} style={{margin:"0px 0px 0px 140px"}} >
                    <Row className='row'>
                        <Col className='Card'>
                            
                            <Row className='logo'>
                                <div className='logoimg'>
                                <img src="./1.svg" alt="" />
                                </div>
                            </Row>
                            <Row className='data'>
                                Energy Saving
                            </Row>
                            <Row className='data1'> 
                                We build readymade websites,
                                mobile applications.
                            </Row>
                        </Col>

                        <Col className='Card23'>
                            
                            <Row className='logo'>
                                <div className='logoimg1'>
                                <img src="./2.svg" alt="" />
                                </div>
                            </Row>
                            <Row className='data'>
                                Energy Saving
                            </Row>
                            <Row className='data1'> 
                                We build readymade websites,
                                mobile applications.
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className='row1'>
                        <Col className='Card1'>
                            
                            <Row className='logo1'>
                                <div className='logoimg2'>
                                <img src="./3.svg" alt="" />
                                </div>
                            </Row>
                            <Row className='data2'>
                                Energy Saving
                            </Row>
                            <Row className='data3'> 
                                We build readymade websites,
                                mobile applications.
                            </Row>
                        </Col>

                        <Col className='Card12'>
                            
                            <Row className='logo1'>
                                <div className='logoimg3'>
                                <img src="./4.svg" alt="" />
                                </div>
                            </Row>
                            <Row className='data2'>
                                Energy Saving
                            </Row>
                            <Row className='data3'> 
                                We build readymade websites,
                                mobile applications.
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>


         

        </div>
    )
}

export default Services