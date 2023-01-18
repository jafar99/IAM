import React from 'react'
import { Row, Col, Carousel } from 'antd'
import '../Component/About.css'
import Marquee from "react-fast-marquee";

const AboutUs = () => {




    return (
        <div className='about'>

            <Row className='firstarow'>
                <Col>
                    <Row > <h1 className='Aheading' >Great Integrated Active Monitoring </h1> </Row>
                    <Row><h1 className='year'>Since 2016</h1></Row>
                    <hr style={{ borderTop: "1px solid red", margin: " 0 20%" }} />
                    <Row className='Apara'><p>  We build readymade websites, mobile applications, and elaborate online business services.</p> </Row>
                </Col>
            </Row>

            <Row className='secondarow'>
                <Col>
                    <iframe width="800" height="415" src="https://www.youtube.com/embed/3UyeG0ch45Q"
                        title="YouTube video player" frameborder="0" style={{ borderRadius: "30px" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </Col>
            </Row>

            <Row className='thirdarow'>
                <Col>
                    <Row><h1 className='Pheading'>PROJECT LIFECYCLE</h1></Row>
                    <Row><p className='Pdesc'>The Project Lifecycle is the sequence of phases through which a project progresses.</p></Row>
                </Col>
            </Row>

            <Row className='fourtharow'>
                <Col span={2} className="Pcard">
                    <Row><span className='Cardno'>01</span></Row>
                    <Row><h2 className='CardHeading'>Ideation</h2></Row>
                    <Row> <p className='CardDesc'>Our IoT Based Energy Monitoring
                        System has saved people up to 25% off their electricity bills by raising their awareness.</p> </Row>

                </Col>
                <Col span={2} className="Pcard">
                    <Row><span className='Cardno'>02</span></Row>
                    <Row><h2 className='CardHeading'>Empathize</h2></Row>
                    <Row><p className='CardDesc'>Our IoT Based Energy Monitoring
                        System has saved people up to 25% off their electricity bills by raising their awareness.</p></Row>

                </Col>
                <Col span={2} className="Pcard">
                    <Row><span className='Cardno'>03</span></Row>
                    <Row><h2 className='CardHeading'>build</h2></Row>
                    <Row><p className='CardDesc'>Our IoT Based Energy Monitoring
                        System has saved people up to 25% off their
                        electricity bills by raising their awareness.</p></Row>
                </Col>
                <Col span={2} className="Pcard">
                    <Row> <span className='Cardno'>04</span></Row>
                    <Row> <h2 className='CardHeading'>deploy</h2></Row>
                    <Row> <p className='CardDesc'>Our IoT Based Energy Monitoring System has saved people
                        up to 25% off their electricity
                        bills by raising their awareness.</p>
                    </Row>
                </Col>

            </Row>


            <Row className='brandinfo'>


                <h1 className='brand'>WE EMBRACE THE FUTURE
                    TOGETHER WITH PIONEERING BRANDS.</h1>


            </Row>

            <Row className='brandAssociation'>
                <Col span={7} className="brandleft" >


                    <Row className='brandname' >
                        <Col>

                            <Row className='brandimages'>
                                <img src="./5.svg" alt="" className='brandimg' />
                            </Row>

                            <Row>
                                <h1 className='brandid'>Matthew Paul</h1>
                            </Row>
                            <Row>
                                <p className='brandesc'>Perfect, very good job! Thank you for the amazing design and work.
                                    Really impressed with the high quality and quick turnaround time.
                                    Highly recommend.</p>
                            </Row>

                        </Col>
                    </Row>

                </Col>
                <Col span={12} >

                    <Row>
                    <Col span={4} className="brandbg113">
                            <img className='brandbgimg1' src="./6.svg" alt="" />
                        </Col>
                        <Col span={4} className="brandbg11">
                            <img className='brandbgimg1' src="./7.svg" alt="" />
                        </Col>

                        <Col span={4} className="brandbg114">
                            <img className='brandbgimg1' src="./6.svg" alt="" />
                        </Col>


                    </Row>
                    <Row>
                        <Col span={4} className="brandbg">

                            <img className='brandbgimg1' src="./7.svg" alt="" />
                        </Col>
                        
                        <Col  className="brandhighlight" >
                            <div className="brandbg25">
                            <img className='brandbgimg15' src="./13.svg" alt="" />
                            </div>
                        </Col>
                        <Col span={4} className="brandbg123">
                            <img className='brandbgimg19' src="./8.svg" alt="" />
                        </Col>

                    </Row>
                    <Row>
                        <Col span={4} className="brandbg133" >

                            <img className='brandbgimg' src="./6.svg" alt="" />
                        </Col>
                        <Col span={4} className="brandbg13">
                            <img className='brandbgimg1' src="./7.svg" alt="" />
                        </Col>

                        <Col span={4} className="brandbg143">
                            <img className='brandbgimg1' src="./6.svg" alt="" />
                        </Col>
                      
                    </Row>

                </Col>
            </Row>

            <Row>
                <h1 className='partner'>OUR TECHNOLGY PARTNERS</h1>
                <Marquee speed="50" style={{ margin: "30px" }} pauseOnClick="false">
                    <img src="./.svg" alt="" className='brandimg1' />
                    <img src="./9.svg" alt="" className='brandimg1' />
                    <img src="./10.svg" alt="" className='brandimg1' />
                    <img src="./11.svg" alt="" className='brandimg1' />
                    <img src="./12.svg" alt="" className='brandimg1' />
                    <img src="./9.svg" alt="" className='brandimg1' />
                    <img src="./10.svg" alt="" className='brandimg1' />
                    <img src="./11.svg" alt="" className='brandimg1' />
                    <img src="./12.svg" alt="" className='brandimg1' />
                    <img src="./10.svg" alt="" className='brandimg1' />
                    <img src="./12.svg" alt="" className='brandimg1' />


                </Marquee>

            </Row>





        </div>
    )
}

export default AboutUs