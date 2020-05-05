import React from "react";

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <div className="row col-12 mt-3">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </div>
    );
  }
}
