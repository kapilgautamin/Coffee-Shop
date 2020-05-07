import React from "react";
import Products from "../../containers/Products";
import { Provider } from "react-redux";
import axios from "axios";
import Store from "../../Store";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthUser: false,
      products: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
    };
  }

  componentDidMount() {
    const fetchPosts = async () => {
      this.setState({ loading: true });
      const res = await axios.get("api/items");
      // console.log("got data",res.data);
      this.setState({ products: res.data });
      this.setState({ loading: false });
    };

    fetchPosts();

    var userAuth = JSON.parse(localStorage.getItem("userAuthDetails"));
    if (userAuth && userAuth.isAuthorised) {
      this.setState({ isAuthUser: true });
    }
  }

  paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

  render() {
    // console.log("Shop auth", this.props.isAuthUser);
    var userAuth = JSON.parse(localStorage.getItem("userAuthDetails"));
    var isAuthentic = false;
    //case when navigation returned false due to refresh, but actual user is still logged in
    if (userAuth && userAuth.isAuthorised !== this.props.isAuthorised)
      isAuthentic = userAuth.isAuthorised;
    else if (userAuth && userAuth.isAuthorised === this.props.isAuthorised)
      isAuthentic = this.props.isAuthUser;

    return (
      <div className="container clearfix d-flex flex-column">
        <div className="row clearfix">
          <Provider store={Store}>
            <Products isAuthUser={isAuthentic} products={this.state.products} />
          </Provider>
        </div>
      </div>
    );
  }
}

export default Shop;
