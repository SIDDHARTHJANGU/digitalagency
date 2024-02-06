import React from "react";
import cardone from "../assets/img/secfour_firstimg.png";
import cardtwo from "../assets/img/secfour_imgone.png";
import cardthree from "../assets/img/secfour_imgtwo.png";
import cardfour from "../assets/img/secfour_imgthree.png";
import cardfive from "../assets/img/secfour_imgfour.png";
import cardsix from "../assets/img/secfour_imgfive.png";
import cardseven from "../assets/img/secfour_imgsix.png";
import cardeight from "../assets/img/secfour_imgseven.png";
import cardnine from "../assets/img/secfour_imgeight.png";
import cardten from "../assets/img/secfour_imgnine.png";
import cardeleven from "../assets/img/secfour_imgtem.png";
// import { Row, Col } from "react-bootstrap";

const NewPage = () => {
  return (
    <div id="Price" className="bg_simple mt_150 overflow-hidden mt-5 pt-5">
      {/* <div className=" text-center pt_139" data-aos="fade-up">
        <h2 className=" txt_clr font_48 fw_600 lnht_125 ff_hal_display">
          Simplicity meets innovative design
        </h2>
        <p className=" fs_21 fw_400 txt_clr_1 ff_hal_text lnht_150 mt_40 ">
          It's really easy to start using Digits.{" "}
          <span className=" d-lg-block">
            Install the theme, choose a demo and
          </span>
          <span className=" d-lg-block">
            start designing the future of your business!
          </span>
        </p>
        <button className=" text-white fs_16 fw_400 lnht_100 ff_hal_text bttn_digi mt_39">
          Buy Digits
        </button>
      </div> */}
      {/* <img className=" w-100 d-xxl-none" src={all} alt="" /> */}
      <div className="bg_box  " data-aos="fade-down">
        <div className=" d-flex      align-items-lg-start">
          <div className=" w-100 img_card_four">
            <img className=" img_border card_img" src={cardone} alt="" />
            <img className=" img_border card_img mt_20" src={cardtwo} alt="" />
            <img
              className=" img_border card_img mt_20"
              src={cardthree}
              alt=""
            />
          </div>
          <div className=" w-100 img_card">
            <img className=" img_border card_img" src={cardfour} alt="" />
            <img className=" img_border card_img mt_20" src={cardfive} alt="" />
          </div>
          <div className=" w-100 img_card_one">
            <img className=" img_border card_img" src={cardsix} alt="" />
            <img
              className=" img_border card_img mt_20"
              src={cardseven}
              alt=""
            />
          </div>
          <div className=" w-100 img_card_two">
            <img className=" img_border card_img" src={cardeight} alt="" />
            <img className=" img_border card_img mt_20" src={cardnine} alt="" />
          </div>
          <div className=" w-100 img_card_three">
            <img className=" img_border card_img" src={cardten} alt="" />
            <img
              className=" img_border card_img mt_20"
              src={cardeleven}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div>
        <Row>
          <Col lg={2}>
            <div>
              <img className="  w_375" src={cardone} alt="" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className="  w_375" src={cardone} alt="" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className="  w_375" src={cardone} alt="" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className="  w_375" src={cardone} alt="" />
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <img className="  w_375" src={cardone} alt="" />
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};

export default NewPage;
