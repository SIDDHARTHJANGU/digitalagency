import React from "react";
import { Row, Col } from "react-bootstrap";
import { Audit, Drive, Grow, Handle, Reseacrch, Tracking } from "./Mysvg";
import shapeone from "../assets/img/sectwo_shapeone.svg";
import shapetwo from "../assets/img/sectwo_shapetwo.svg";

const Features = () => {
  return (
    <div className=" mt_114 pb_185 position-relative z-1">
      <div>
        <img
          className=" position-absolute z-n1   shapeone"
          src={shapeone}
          alt=""
        />
        <img
          className=" position-absolute z-n1   shapetwo"
          src={shapetwo}
          alt=""
        />
      </div>
      <div className=" Custom_container">
        <div>
          <p className=" fs_12 fw_700 ff_Dm_sans feature_clr  text-uppercase">
            features
          </p>
          <h2 className=" fs_48 fw_500 ff_Dm_sans text_clr mt_24">
            We are here to help <span className=" d-lg-block">you with</span>
          </h2>
        </div>
        <Row className=" mt_32">
          <Col lg={4}>
            <div className=" sectwo_card">
              <Grow />
              <p className=" fs_22 fw_700 ff_Dm_sans grow_clr">
                Grow your business
              </p>
              <p className="  fs_16 fw_400 ff_Dm_sans magic_clr mt_15 ">
                <span className=" fw_700">The magic wand</span> for success is
                in figuring out how to bring in the profits and ensure the
                capacity needed to sustain that growth for posterity.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" sectwo_card">
              <Drive />
              <p className=" fs_22 fw_700 ff_Dm_sans grow_clr">
                Drive more sales
              </p>
              <p className="  fs_16 fw_400 ff_Dm_sans magic_clr mt_15 ">
                A potential customer, once lost, hard to retain back. But
                <span className=" fw_700"> keeping some critical</span> factors
                in mind, we can, for sure, use these loyalty programs as
                customer retention tools.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" sectwo_card">
              <Handle />
              <p className=" fs_22 fw_700 ff_Dm_sans grow_clr">
                Handle by Expert
              </p>
              <p className="  fs_16 fw_400 ff_Dm_sans magic_clr mt_15 ">
                We know how we candevelop deep, trust-based relationships with
                our clients,work together more collabotively
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" sectwo_card mt_24">
              <Reseacrch />
              <p className=" fs_22 fw_700 ff_Dm_sans grow_clr">UX Research</p>
              <p className="  fs_16 fw_400 ff_Dm_sans magic_clr mt_15 ">
                UX research is the systematic study of target users and their
                requirements, to add realistic contexts and insights to design
                processes.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" sectwo_card mt_24">
              <Audit />
              <p className=" fs_22 fw_700 ff_Dm_sans grow_clr">
                Business Audit
              </p>
              <p className="  fs_16 fw_400 ff_Dm_sans magic_clr mt_15 ">
                An audit examines your business's financial records to verify
                they are accurate. This is done through a systematic review of
                your transactions.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" sectwo_card mt_24">
              <Tracking />
              <p className=" fs_22 fw_700 ff_Dm_sans grow_clr">Data tracking</p>
              <p className="  fs_16 fw_400 ff_Dm_sans magic_clr mt_15 ">
                The hardware and software, which when used together allows you
                to know where something is at any point in time
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Features;
