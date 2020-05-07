import React from "react";
import axios from "axios";
import history from "../../../history";

class AddProduct extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      img: "",
      category: "",
      price: 0,
      units: 0,
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  AddToDatabase = (event) => {
    event.preventDefault();
    // console.log(this.state);
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
    var userAuth = JSON.parse(localStorage.getItem("userAuthDetails"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userAuth.user.token,
      },
    };
    axios.post("/api/items/", body, config).then(
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
              id="description"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="img"
              name="img"
              placeholder="Enter Image URL"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value="Espresso"
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
              name="units"
              min="0"
              placeholder="in numbers"
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="col-lg-6 col-sm-6 col-6 checkout">
            <button
              onClick={this.AddToDatabase.bind(this)}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Add to Database
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
