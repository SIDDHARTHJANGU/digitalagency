import React from "react";
import { Row, Col } from "react-bootstrap";
import secfiveimg from "../assets/img/sec_fiveimg.png";
import shade from "../assets/img/Vector.png";

const StartWorking = () => {
  return (
    <div className="bg_grident">
      <div className=" Custom_container">
        <Row className=" df align-items-center justify-content-between py_150">
          <Col md={6}>
            <p className=" fw_700 fs_12 ff_Dm_sans start_clr text-uppercase">
              start with us
            </p>
            <h2 className=" fw_500  fs_48 ff_Dm_sans  text-white comn_linhight mt_24">
              Start working <span className=" d-md-block">faster today</span>{" "}
            </h2>
            <p className=" fw_400 fs_20 ff_Dm_sans  text-white solution_linehight170 mt_24  ">
              We know the best solution for all of your{" "}
              <span className="  d-lg-block">
                business ideas and we can help you solve
              </span>{" "}
              all business problems
            </p>
            <button className=" Get_Btn fw_700 ff_Dm_sans fs_14 text-uppercase mt_30">
              Get started
            </button>
          </Col>
          <Col md={6} className=" position-relative z-3">
            <div>
              <img
                className=" position-absolute shade z-n1  "
                src={shade}
                alt="img"
              />
            </div>
            <div>
              <img className=" w-100   " src={secfiveimg} alt="img" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StartWorking;
