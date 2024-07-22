import React from "react";
import "./Footer.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
import { MdLockPerson,MdAccessTimeFilled } from "react-icons/md";
function Footer() {
  return (
    <>
      <div className="footer mt-2">
        <div className="container ">
          <div className="left_box">
            <div className="box">
              <div className="icon">
                <IoPersonCircleSharp  />
              </div>
              <div className="details">
                <h3>Easy access</h3>
                <p>All docs are stored at a single place.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <MdLockPerson />
              </div>
              <div className="details">
                <h3>Security</h3>
                <p>More security for confidential docs.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <MdAccessTimeFilled />
              </div>
              <div className="details">
                <h3>Anywhere at Anytime</h3>
                <p>Access documents anywhere and at any time.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <TbPasswordUser />
              </div>
              <div className="details">
                <h3>Store Passwords</h3>
                <p>Store passwords securly at one spot.</p>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="heading">
              <div className="image">
                <img src={"./image/logo.webp"} alt="" />
              </div>
              <p>
                Store all your documents online and access them easily and efficiently.
              </p>
            </div>
            <div className="info">
              <div className="info_box">
                <h3>Your Dashboard</h3>
                <div className="p_box">
                  <p></p>
                  <p>Profile</p>
                  <p>Name</p>
                  <p>Email</p>
                  <p>Contact Number</p>
                </div>
              </div>
              <div className="info_box">
                <h3>Cloud Storage Services</h3>
                <div className="p_box">
                  <p>Educational</p>
                  <p>Medical</p>
                  <p>Confidential</p>
                  <p>Identity</p>
                </div>
              </div>
              <div className="info_box">
                <h3>Help Desk</h3>
                <div className="p_box">
                  <p>+(012)99999999</p>
                  <p>info@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;