import React from "react";
import SignIn from "./SignIn";
import Register from "./Register";

export default class Authorise extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoginType: true,
      isRegisterType: false,
    };
  }

  switchType = (e) => {
    e.preventDefault();
    this.state.isLoginType
      ? this.setState({
          isLoginType: false,
          isRegisterType: true,
        })
      : this.setState({
          isLoginType: true,
          isRegisterType: false,
        });
  };

  render() {
    return (
      <div className="dropdown">
        <button type="button" className="btn btn-info" data-toggle="dropdown">
          {this.state.isLoginType && (
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            ) &&
            "Login"}
          {this.state.isRegisterType && (
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            ) &&
            "Register"}
        </button>
        <form className="dropdown-menu">
          <div className="row total-header-section">
            <div className="col-lg-3 col-sm-3 col-3">
              {this.state.isLoginType && (
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              )}
              {this.state.isRegisterType && (
                <i class="fa fa-registered" aria-hidden="true"></i>
              )}
            </div>
            <div className="col-lg-9 col-sm-9 col-9 total-section text-right signin">
              <button
                onClick={this.switchType.bind(this)}
                className="btn btn-primary"
              >
                {this.state.isLoginType && "Want to Register"}
                {this.state.isRegisterType && "Want to Login"}
              </button>
            </div>
          </div>
          {this.state.isLoginType && <SignIn />}
          {this.state.isRegisterType && <Register />}
        </form>
      </div>
    );
  }
}
