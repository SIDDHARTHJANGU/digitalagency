import React, { useState } from "react";
import logo from "../assets/img/logo_nav.svg";
import { Close, Open } from "./Mysvg";
// import AOS from "aos";
// import "aos/dist/aos.css";
import heroimg from "..//assets/img/hero_img.png";

export const Myheader = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);
  const [show, setShow] = useState(false);
  if (show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  // const Movement = () => {
  //   setshow(false);
  // };
  return (
    <div className=" hero_bg min-vh-100">
      <nav className=" pt-34">
        <div className=" container-fluid px_65">
          <div className=" d-flex  align-items-center justify-content-between">
            <div>
              <img src={logo} alt="img" />
            </div>
            <ul className={show ? "open" : ""}>
              <li>
                <a
                  href="#Home"
                  className="fs_16 fw_500 text-white ff_Dm_sans nav_links  line_hight"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="fs_16 fw_500 text-white ff_Dm_sans nav_links line_hight"
                >
                  Your benefits
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="fs_16 fw_500 text-white ff_Dm_sans nav_links line_hight"
                >
                  Our process
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="fs_16 fw_500 text-white ff_Dm_sans nav_links line_hight"
                >
                  Our works
                </a>
              </li>
              <li>
                <a
                  href="#Testimonials"
                  className="fs_16 fw_500 text-white ff_Dm_sans nav_links line_hight"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#Start a project"
                  className="fs_16 fw_500 text-white ff_Dm_sans nav_links line_hight"
                >
                  Start a project
                </a>
              </li>
            </ul>
            <button className=" Get_Btn fw_700 ff_Dm_sans fs_14 text-uppercase">
              Get started
            </button>

            <button
              className="open d-xl-none navicon"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <Close /> : <Open />}
            </button>
          </div>
        </div>
      </nav>
      <div className=" ">
        <div className=" Custom_container">
          <div className="  text-center mt_130">
            <h1 className=" fs_68 ff_Dm_sans fw_500 text-white ">
              A Digital Product Design Agency
            </h1>
            <p
              className=" fs_20 fw_400 ff_Dm_sans Creative_clr line_hight170 pt-2
            "
            >
              We are Creative and Professional Digital Agency
            </p>
            <div>
              <button className=" Get_Btn fw_700 ff_Dm_sans fs_14 text-uppercase mt_41">
                Get started
              </button>
            </div>
            <div>
              <img className=" w-100" src={heroimg} alt=" img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
