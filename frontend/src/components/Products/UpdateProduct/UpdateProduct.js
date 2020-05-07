import React from "react";
import axios from "axios";
import history from "../../../history";

class UpdateProduct extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      img: "",
      category: "",
      price: 0,
      units: 0,
    };
  }

  componentDidMount() {
    const authResult = new URLSearchParams(window.location.search);
    const id = authResult.get("id");
    // console.log("id is ", id);

    const fetchPosts = async () => {
      const res = await axios.get("/api/items/" + id);
      //   console.log(res.data);
      if (res.status === 200) {
        var item = res.data;
        this.setState({
          id: id,
          name: item.name,
          description: item.description,
          img: item.img,
          category: item.category,
          price: item.price,
          units: item.units,
        });
        console.log("Item found in database", item);
      } else {
        console.log("Item not found in database");
      }
    };

    fetchPosts();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateDatabase = (event) => {
    event.preventDefault();
    // console.log(this.state);
    const id = this.state.id;
    const name = this.state.name;
    const description = this.state.description;
    const img = this.state.img;
    const category = this.state.category;
    const price = this.state.price;
    const units = this.state.units;

    //Request body
    const body = JSON.stringify({
      name,
      description,
      img,
      category,
      price,
      units,
    });
    console.log("update", body);
    var userAuth = JSON.parse(localStorage.getItem("userAuthDetails"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userAuth.user.token,
      },
    };
    var uri = "/api/items/" + id;
    console.log(uri);
    axios.put(uri, body, config).then(
      (res) => {
        console.log(res.data, res.status);
        history.push("../Shop");
      },
      (err) => console.log(err)
    );
  };

  render() {
    return (
      <div className="container">
        <h3>Enter item details:</h3>
        <form className="col-sm-9">
          <div className="form-group">
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              name="name"
              placeholder="Enter Item name"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              name="description"
              defaultValue={this.state.description}
              id="description"
              rows="3"
              onChange={this.onChange.bind(this)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="img"
              value={this.state.img}
              name="img"
              placeholder="Enter Image URL"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={this.state.category}
              name="category"
              placeholder="Enter Category"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={this.state.price}
              name="price"
              min="0"
              placeholder="in numbers"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Units</label>
            <input
              type="number"
              className="form-control"
              id="units"
              value={this.state.units}
              name="units"
              min="0"
              placeholder="in numbers"
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="col-lg-6 col-sm-6 col-6 checkout">
            <button
              onClick={this.updateDatabase.bind(this)}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;
