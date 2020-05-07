import React from "react";

export default class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Register = (event) => {
    event.preventDefault();
    // console.log(this.state);
    const name = this.state.fullname;
    const email = this.state.email;
    const password = this.state.password;

    //Request body
    const body = JSON.stringify({ name, email, password });
    this.props.userDetails(body);
  };

  render() {
    return (
      <div className="row col-12 mt-3">
        <div className="form-group">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            placeholder="Enter your name"
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.onChange.bind(this)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
            onClick={this.Register.bind(this)}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
