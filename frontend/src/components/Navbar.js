import React, { Component } from "react";
import CartList from "../components/Cart/CartList";
import Authorise from "./Authorise/Authorise";
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  //coming here means user is authenticated
  getUserAuthentication = (authDetails) => {
    // console.log("user auth details", authDetails);
    if (authDetails.isAuthorised)
      localStorage.setItem("userAuthDetails", JSON.stringify(authDetails));
    else localStorage.removeItem("userAuthDetails");
    this.props.isAuthUser(authDetails.isAuthorised);
  };

  render() {
    const { cart, addToCartAction } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/Home">
          Coffee Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Shop">
                Shop
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/Home"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/Home">
                  Action
                </a>
                <a className="dropdown-item" href="/Home">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/Home">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <Authorise authUser={this.getUserAuthentication} />
          <CartList cart={cart} addToCartAction={addToCartAction} />
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
