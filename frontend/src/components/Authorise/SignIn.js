import React from "react";

export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Login = (event) => {
    event.preventDefault();
    // console.log(this.state);
    const email = this.state.email;
    const password = this.state.password;

    //Request body
    const body = JSON.stringify({ email, password });
    this.props.userDetails(body);
  };

  render() {
    return (
      <div className="row col-12 mt-3">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
          <button
            onClick={this.Login.bind(this)}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
