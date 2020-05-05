import React from "react";

export default class Register extends React.PureComponent {
  render() {
    return (
      <div className="row col-12 mt-3">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">UserName</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter username"
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
            Register
          </button>
        </div>
      </div>
    );
  }
}
