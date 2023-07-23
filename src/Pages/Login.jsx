import React, { useState } from "react";
// import { styled } from "styled-components";
import "../Pages/login_register.css";
import { login, register } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  // register information state
  const [registerform, setRegisterform] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    gender: "",
  });

  // register submit function
  const HandelRegister = () => {
    console.log(registerform);
    dispatch(register(registerform));
  };

  // login information state
  const [loginform, setLoginform] = useState({
    email: "",
    password: "",
  });

  // login submit function
  const HandelLogin = () => {
    console.log(loginform);
    dispatch(login(loginform));
    alert("Login Successfully")
  };

  return (
    <div id="logindiv">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 head">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                              onChange={(e) => {
                                setLoginform({
                                  ...loginform,
                                  email: e.target.value,
                                });
                              }}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                              onChange={(e) => {
                                setLoginform({
                                  ...loginform,
                                  password: e.target.value,
                                });
                              }}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button
                            className="btn mt-4"
                            onClick={() => HandelLogin()}
                          >
                            Login
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a
                              href="https://www.web-leb.com/code"
                              className="link"
                            >
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3 head">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              placeholder="Name"
                              onChange={(e) => {
                                setRegisterform({
                                  ...registerform,
                                  name: e.target.value,
                                });
                              }}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="number"
                              className="form-style"
                              placeholder="Age"
                              onChange={(e) => {
                                setRegisterform({
                                  ...registerform,
                                  age: parseInt(e.target.value),
                                });
                              }}
                            />
                            <i className="input-icon uil uil-18-plus"></i>
                          </div>
                          <div className="form-group mt-2">
                            <select
                              style={{ color: "#ffeba7" }}
                              name="Gender"
                              className="form-style"
                              onChange={(e) => {
                                setRegisterform({
                                  ...registerform,
                                  gender: e.target.value,
                                });
                              }}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">male</option>
                              <option value="female">female</option>
                            </select>
                            <i className="input-icon uil uil-18-plus"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                              onChange={(e) => {
                                setRegisterform({
                                  ...registerform,
                                  email: e.target.value,
                                });
                              }}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              placeholder="Password"
                              onChange={(e) => {
                                setRegisterform({
                                  ...registerform,
                                  password: e.target.value,
                                });
                              }}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button
                            className="btn mt-4"
                            onClick={() => HandelRegister()}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
