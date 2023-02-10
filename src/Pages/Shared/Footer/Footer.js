import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                <h1>Bike Zone</h1>
                <div className="icons-container d-flex text-center">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="right-footer-container">
                <div className="phone d-flex align-items-center justify-content-center mt-3">
                  <div>
                    <input
                      className="px-5 mx-2 mb-1 form-control"
                      placeholder="Name"
                      type="email"
                      name=""
                      id=""
                    />
                    <input
                      className="px-5 mx-2 form-control"
                      placeholder="Email"
                      type="email"
                      name=""
                      id=""
                    />
                    <button className="px-5 my-2 btn-success rounded-3 text-white">
                      SUBSCRIBE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Products</li>
                  <li className="footer-menu">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          <h6>Copyright © {year} - All right reserved by Shahid Monowar</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
