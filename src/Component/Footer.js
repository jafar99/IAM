import React from "react";
import "../Component/Footer.css";
import { Row, Col } from "antd";
import FB from "../Images/fb.png";
import LINKEDIN from "../Images/linkedin.png";
import INSTA from "../Images/insta.png";

const Footer = () => {
  return (
    <div>
      <Row className="Footer">
        <Col span={6} className="foot">
          <Row className="footlogo">
          
            <img src="./KIAM 1.png" alt="" />{" "}
          </Row>
          <Row className="sociallogo">
            <img src={FB} alt="" className="social" />
            <img src={LINKEDIN} alt="" className="social" />
            <img src={INSTA} alt="" className="social" />
          </Row>
        </Col>
        <Col span={4} className="foot">
          <h4>Head Office</h4>
          <hr style={{marginRight:"50px" ,border: "1px solid red"}}/>


          <Row>
            <p>
              1 stFloor, Block No. 27, Electronic Co-op Estate, Satara Road,
              Swargate, Pune-411009
            </p>
          </Row>

          <Row>
            <p>+91 020 67479668/+919321255012</p>
          </Row>

          <Row>
            <p>enquiry@kiam.in</p>
          </Row>
        </Col>
        <Col span={4} className="foot">
          <h4>Mumbai Office</h4>
          <hr style={{marginRight:"50px" ,border: "1px solid red"}}/>


          <Row>
            <p>
              The Playce, CabinNo - 4, Marathon Maxima, Ground Floor ,Bhandup
              (West) Mumbai - 400080
            </p>
          </Row>

          <Row>
            <p>+91 020 67479668/+919321255012</p>
          </Row>

          <Row>
            <p>enquiry@kiam.in</p>
          </Row>
        </Col>
        <Col span={4} className="foot">
          <h3>Service</h3>
          <hr style={{marginRight:"50px" ,border: "1px solid red"}}/>

          <Row>
            <p>
              Access Control Solution 24x 7 Centralized Remote Monitoring Energy
              Saving Services AMC Services.
            </p>
          </Row>
        </Col>
        <Col span={4} className="foot">

          <h3>Products</h3>
          <hr style={{marginRight:"70px" ,border: "1px solid red"}}/>
          <Row><p>Access Control</p></Row>
          <Row><p>Intrusion</p></Row>
          <Row><p>Fire Alarm System</p></Row>
          <Row><p>CCTV System</p></Row>
          <Row><p>Energy Monitering & Saving</p></Row>
        </Col>
      </Row>

      <Row className="copyright">
         <p style={{textAlign:"center"}}>© KIAM 2022. All rights are reserved. Site Designed by: Nexa Software</p>
      </Row>
    </div>
  );
};

export default Footer;
