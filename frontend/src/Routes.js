import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import history from "./history";
import AddProduct from "./components/Products/AddProduct/AddProduct";
import UpdateProduct from "./components/Products/UpdateProduct/UpdateProduct";

export default class Routes extends Component {
  render() {
    // console.log("routes",this.props.isAuthUser);
    return (
      <Router history={history}>
        <Switch>
          <Route path="/About" component={About} />
          <Route
            path="/Shop"
            render={(props) => (
              <Shop {...props} isAuthUser={this.props.isAuthUser} />
            )}
          />
          <Route path="/AddProduct" component={AddProduct} />
          <Route
            path="/UpdateProduct"
            render={(props) => <UpdateProduct {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}
