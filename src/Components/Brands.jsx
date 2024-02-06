import React from "react";
import { Row, Col } from "react-bootstrap";
import mazada from "../assets/img/mazda.png";
import atlas from "../assets/img/atlassians.png";
import smashing from "../assets/img/smashing.png";
import Qantas from "../assets/img/qantas.png";
import buy from "../assets/img/buysellads.png";
import nitro from "../assets/img/nitro.png";
import cssmania from "../assets/img/cssmania.png";
import popsu from "../assets/img/popsugar.png";
import talent from "../assets/img/talentbin.png";
import civicrm from "../assets/img/civicrm.png";
const Brands = () => {
  return (
    <div>
      <div className=" Custom_container pt_185">
        <div className=" text-center">
          <p className=" fs_12 fw_700 ff_Dm_sans brands_clr">BRANDS</p>
          <h2 className=" fs_48 fw_500 ff_Dm_sans text-black comn_linhight mt_24">
            We work with thousands of the world’s{" "}
            <span className=" d-block">leading brands</span>{" "}
          </h2>
        </div>
        <Row className=" d-flex justify-content-between  align-items-center mt_32">
          <Col lg={2}>
            <div>
              <img className=" w-100" src={mazada} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={atlas} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={smashing} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={Qantas} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={buy} alt="img" />
            </div>
          </Col>
        </Row>
        <Row className=" d-flex justify-content-between  align-items-center mt_24">
          <Col lg={2}>
            <div>
              <img className=" w-100" src={nitro} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={cssmania} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={popsu} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={talent} alt="img" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className=" w-100" src={civicrm} alt="img" />
            </div>
          </Col>
        </Row>
        <p className=" text-center fs_16 fw_400 ff_Dm_sans company_clr mt_41 ">
          You're going to be in good company. We work with{" "}
          <span className=" d-block">world's leading brands.</span>
        </p>
      </div>
    </div>
  );
};

export default Brands;
