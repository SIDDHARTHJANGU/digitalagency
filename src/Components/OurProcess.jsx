import React from "react";
import { Row, Col } from "react-bootstrap";
import imgone from "../assets/img/sec_one.png";
import imgtwo from "../assets/img/sec_two.png";
import imgthree from "../assets/img/sec_three.png";
import { Aduittwo, Overall, Purchase } from "./Mysvg";

const OurProcess = () => {
  return (
    <div className=" secthree_bg pt_193">
      <div className=" Custom_container">
        <div className=" text-center">
          <p className=" fs_12  ff_Dm_sans fw_700 works_clr text-uppercase ">
            how it works
          </p>
          <h2 className="ff_Dm_sans fs_48 fw_500  text-white comn_linhight mt_14">
            Our Process
          </h2>
          <p className=" fs_20 fw_400 ff_Dm_sans  text-white line_hight170">
            We know the best solution for all of your business ideas and we can
            help you{" "}
            <span className=" d-block">solve all business problems</span>
          </p>
        </div>
        <div className=" mt_33">
          <div className=" secthree_card ">
            <Row className="  d-flex align-items-center">
              <Col lg={6}>
                <img className=" w-100" src={imgone} alt="img" />
              </Col>
              <Col lg={6} >
                <Aduittwo />
                <p className=" fs_22 fw_700  ff_Dm_sans grow_clr">
                  Business Audit
                </p>
                <p className=" fs_16 fw_400 ff_Dm_sans magic_clr mt_15">
                  An audit examines your business's financial records to verify
                  they are accurate. This done through a systematic review of
                  your transactions.{" "}
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className=" mt_33">
          <div className=" secthree_card ">
            <Row className="  d-flex align-items-center">
              <Col lg={6}>
                <img className=" w-100" src={imgtwo} alt="img" />
              </Col>
              <Col lg={6}>
                <Overall />
                <p className=" fs_22 fw_700  ff_Dm_sans grow_clr">
                  Data tracking
                </p>
                <p className=" fs_16 fw_400 ff_Dm_sans magic_clr mt_15">
                  The hardware and software, which when used together allows you
                  to know where something is at any point in time
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className=" mt_33">
          <div className=" secthree_card ">
            <Row className="  d-flex align-items-center justify-content-between">
              <Col lg={6}>
                <img className=" w-100" src={imgthree} alt="img" />
              </Col>
              <Col lg={6}>
                <Purchase />
                <p className=" fs_22 fw_700  ff_Dm_sans grow_clr">Results</p>
                <p className=" fs_16 fw_400 ff_Dm_sans magic_clr mt_15">
                  An audit examines your business's financial records to verify
                  they are accurate. This is done through a systematic review
                  your transactions.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
