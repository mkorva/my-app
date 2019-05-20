import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import background from "./assets/background.jpg";
import "./App.css";

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

body {

	font-size:14px;
	font-family: 'Poppins',sans-serif;
	background: url("./assets/background.jpg") no-repeat center center fixed;
	background-size: cover;
	

}

.login-container {
	height: 100vh;
	width: 100%;

}

.login-form {
	max-width: 100%
	width: 370px;
	padding:15px;
	margin:auto;
	background-color: white;
	border-radius:25px;

}

.form-control  {
	font-size:15px;
	min-height: 48px;
	font-weight:500;
}

.form-control:focus {
	border-color:#723dbe;
	box-shadow:0 0 0 0.2rem rgba(114,61,190,.25) ;
}

.forgot-link
{
	font-size:13px;

}

.forgot-link label {

	margin-bottom: 0;
}

.login-form a  {
	text-decoration: none;
	color:#666666;
}

.login-form a:hover  {

	color:#723dbe;
}

.btn-custom {
	background: #723dbe;
	border-color:#723dbe;
	color:#ffffff;
	font-size:15px;
	font-weight:600;
	min-height: 48px;
}

.btn-custom:focus,.btn-custom:hover,btn-custom:active,.btn-custom:active:focus{
	background: #54229d;
	border-color:#54229d;
	color:#ffffff;
}


.btn-custom:focus {
	box-shadow:0 0 0 0.2rem rgba(114,61,190,.25) ;
}

} `;

export const Login1 = () => (
  <Styles>
    <div>
      <div className="login-container d-flex align-items-center justify-content-center">
        <form className="login-form">
          <div className="text-center">
            <img src={logo} />
          </div>{" "}
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control rounded-pill form-control-lg"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control rounded-pill form-control-lg"
              placeholder="Password"
            />
          </div>
          <div className="forgot-link d-flex align-items-center justify-content-left">
            <a href="forgotpassword.html">
              {" "}
              <strong>
                Forgot Password?<strong> </strong>
              </strong>
            </a>
            <strong>
              <strong />
            </strong>
          </div>
          <strong>
            <strong>
              <button
                type="submit"
                className="btn btn-custom btn-block rounded-pill btn-lg"
              >
                LOGIN
              </button>
              <p className="mt-3 font font-weight-normal">
                {" "}
                Don't have an account?{" "}
                <a href="register.html">
                  {" "}
                  <strong>
                    {" "}
                    Register here <strong> </strong>
                  </strong>
                </a>
                <strong>
                  <strong> </strong>
                </strong>
              </p>
              <strong>
                <strong />
              </strong>
            </strong>
          </strong>
        </form>
      </div>
      <strong>
        <strong>
          <strong />
        </strong>
      </strong>
    </div>
  </Styles>
);

export default Login1;
