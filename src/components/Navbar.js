import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Fiosegne
            </Link>
          </li>
        </ul>
        <div className="ml-auto">
          <Link to="/cart" className="text-right">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fa fa-cart-plus"></i>
              </span>
              My Cart
            </ButtonContainer>
          </Link>
          <Link to="/login" className="text-right mr-1">
            <a href="/login">Login</a>
          </Link>
          <Link to="/signup" className="text-right mr-1">
            <a href="/login">signup</a>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
