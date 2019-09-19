import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  signup = () => {
    console.log("User registration");
  };

  cancelSignup = () => {
    console.log("Cancel registration");
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
                        <h5 className="text-left">Sign Up </h5>
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
                          <div className="form-group row">
                            <div className="col-12">
                              <input
                                type="password"
                                className="form-control"
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder="Confirm Password"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer btn-group">
                        <Link to="/signup">
                          <ButtonContainer onClick={() => this.goToSignup()}>
                            Signup
                          </ButtonContainer>
                        </Link>
                        <Link to="/">
                          <button
                            className="btn btn-secondary"
                            onClick={() => this.login()}
                          >
                            Cancel
                          </button>
                        </Link>
                      </div>
                      <div>
                        <h6 className="text-left text-muted">
                          Already have an account,{" "}
                          <Link to="/Login">Login</Link>
                        </h6>
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
