import React from "react";
import footerlogo from "../assets/img/logofooter.svg";
import { Facebook, Instagram, Twitter } from "./Mysvg";

const Myfooter = () => {
  return (
    <div className=" bg_clr">
      <div className=" Custom_container">
        <div className=" d-flex align-items-center flex-wrap justify-content-between px_97">
          <div className="  d-flex   gap_81 ">
            <div>
              <img src={footerlogo} alt="img" />
            </div>
            <ul className=" d-flex flex-wrap align-items-center gap_32 ">
              <li>
                <a
                  href="#Home"
                  className=" fs_16  fw_500 ff_Dm_sans text-white line_hight nav_links"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#Your benefits"
                  className=" fs_16  fw_500 ff_Dm_sans text-white line_hight nav_links"
                >
                  Your benefits
                </a>
              </li>
              <li>
                <a
                  href="#Our process"
                  className=" fs_16  fw_500 ff_Dm_sans text-white line_hight nav_links"
                >
                  Our process
                </a>
              </li>
              <li>
                <a
                  href="#Our works"
                  className=" fs_16  fw_500 ff_Dm_sans text-white line_hight nav_links"
                >
                  Our works
                </a>
              </li>
              <li>
                <a
                  href="#Testimonials"
                  className=" fs_16  fw_500 ff_Dm_sans text-white line_hight nav_links"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#Start a project"
                  className=" fs_16  fw_500 ff_Dm_sans text-white line_hight nav_links"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
          <div className=" gap_20  d-flex align-items-center ">
            <div>
              {" "}
              <a href="facebook">
                {" "}
                <Facebook />
              </a>
            </div>
            <div>
              <a href="insta">
                {" "}
                <Instagram />
              </a>
            </div>
            <div>
              {" "}
              <a href="twitter">
                {" "}
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className=" lines"></div>
        <div className="  d-flex align-items-center justify-content-between">
          <div>
            <p className=" fs_15 fw_400 ff_Dm_sans poilicy_clr line_hight166">
              © 2021 Company
            </p>
          </div>
          <div className=" d-flex align-items-center gap_24 px_30">
            <p className=" fs_15 fw_400 ff_Dm_sans poilicy_clr service_linehight">
              Privacy policy
            </p>
            <p className=" fs_15 fw_400 ff_Dm_sans poilicy_clr service_linehight">
              Term of service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfooter;
