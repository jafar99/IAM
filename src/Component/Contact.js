import React from 'react'
import '../Component/Contact.css'

import { Row, Col } from 'antd'

const Contact = () => {
    return (
        <div className='contact'>

            <Row className='firstarow'>
                <Col>
                    <Row > <h1 className='Aheading1' >Great Integrated Active Monitoring </h1> </Row>

                    <Row className='Apara1'><p> 
                        With an agile approach and outstanding solutions in IT that we customize for our clients,
                        we  create an unbeatable, unique experience in technology</p> </Row>

                    <Row><h1 className='Aheading1'>Get in touch with us</h1></Row>
                </Col>
            </Row>

            
            <Row className='contactform'>
               
               <Col >
                <form action="" className='form' required>
                   
                    <input type="text" className='input' placeholder='name' required/>  
                    <br />      
                    <input type="text" className='input' placeholder='Compony name' required/>
                    <br />
                    <input type="email" className='input' placeholder='Email' required/>  
                    <br />      
                    <input type="text" className='input' placeholder='phone' required/>
                    <br />      
                    <input type="text" className='input' placeholder='message' required/>         
                        <br />
                    <input type="submit" className='submitbtn' />
                   
                    
            </form> 
            </Col>
            </Row>
         



        </div>
    )
}

export default Contact