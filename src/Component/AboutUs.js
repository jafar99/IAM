import React from 'react'
import { Row, Col } from 'antd'
import '../Component/About.css'

const AboutUs = () => {
    return (
        <div className='about'>
            
            <Row className='firstarow'>
                <Col>
               <Row > <h1 className='Aheading' >Great Integrated Active Monitoring </h1> </Row> 
               <Row><h1 className='year'>Since 2016</h1></Row>
                <hr style={{borderTop: "1px solid red" ,margin:" 0 20%"}}/>
               <Row className='Apara'><p>  We build readymade websites, mobile applications, and elaborate online business services.</p> </Row> 
               </Col>            
            </Row>
           
            <Row className='secondarow'>
                <Col>
            <iframe width="800" height="415" src="https://www.youtube.com/embed/3UyeG0ch45Q" 
            title="YouTube video player" frameborder="0" style={{borderRadius:"30px"}}
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

            <Row>
                <Col>
                    
                </Col>
            </Row>

        </div>
    )
}

export default AboutUs