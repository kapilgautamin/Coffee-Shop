import React, { Component } from "react";
import { createStore } from "redux";
import axios from "axios";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import cartReducer from "./redux/reducers/cart_reducer";

import Products from "./containers/Products";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import "./App.css";

const Store = createStore(
  combineReducers({
    cart: cartReducer,
  })
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthUser: false,
      comments: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
    };
  }

  paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

  setAuthLevel = (level) => {
    console.log("Setting auth level in app.js to ", level);
    this.setState({ isAuthUser: level });
  };

  componentDidMount() {
    const fetchPosts = async () => {
      this.setState({ loading: true });
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({ comments: res.data });
      this.setState({ loading: false });
    };

    fetchPosts();

    var userAuth = JSON.parse(localStorage.getItem("userAuthDetails"));
    if (userAuth && userAuth.isAuthorised) {
      this.setState({ isAuthUser: true });
    }
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
    const currentPosts = this.state.comments.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <>
        <Provider store={Store}>
          <Navbar isAuthUser={this.setAuthLevel} />
        </Provider>
        <div className="container clearfix d-flex flex-column">
          <div className="row clearfix">
            <Provider store={Store}>
              <Products isAuthUser={this.state.isAuthUser} />
            </Provider>
          </div>
          <div className="row d-flex flex-column">
            <ul className="list-group">
              {currentPosts.map((comment) => (
                <li className="list-group-item" key={comment.id}>
                  {" "}
                  {comment.userId} ,{comment.title}
                </li>
              ))}
            </ul>
            <Pagination
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.state.comments.length}
              currentPage={this.state.currentPage}
              paginate={this.paginate}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
