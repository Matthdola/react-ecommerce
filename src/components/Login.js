import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Login extends Component {
  login = () => {
    console.log("user logged");
  };

  goToSignup = () => {
    console.log("Swithed to signup");
  };

  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h5 className="text-left">Login </h5>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="form-group row">
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Username or Phonenumber"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-12">
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer btn-group">
                        <Link to="/">
                          <ButtonContainer onClick={() => this.login()}>
                            Login
                          </ButtonContainer>
                        </Link>
                        <Link to="/signup">
                          <ButtonContainer
                            cart
                            onClick={() => this.goToSignup()}
                          >
                            Signup
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background-color: var(--mainWhite);
  }
`;
