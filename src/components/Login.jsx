import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css"
import firstlogo from "../images/cta-logo-one.svg";
import secondlogo from "../images/cta-logo-two.png";
import bg from "../images/login-background.jpg";
const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="login-body">
          <div className="Background">
            <img alt="..." src={bg} />
          </div>
          <div className="center" id="mydiv">
            <img src={firstlogo} alt="" className="firstlogo" width=" 100vw"height= "100vh" />
            <NavLink className="login-btn btn btn-primary" to="/home">
              <h4>Explore</h4>
            </NavLink>
            <p className="login-dis">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>
            <img src={secondlogo} alt="" className="secondlogo" />
          </div>
        </div>
      </div>
    </>
  );
};



export default Login;
