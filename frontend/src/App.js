import React, { Component } from 'react';
import {createStore,applyMiddleware} from 'redux';
import axios from "axios";
import {Provider} from 'react-redux';
import reducers from "./redux/reducers";

// import Products from './components/Products/Products';
import ProductsContainer from './containers/ProductsContainer';
import Pagination from './components/Pagination';
import './App.css';

const Store = createStore(reducers);

class App extends Component {

  constructor(){
    super();
    this.state = {
      users: [],
      videos: [],
      response: '',
      post: '',
      responseToPost: '',
      comments: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 10,
    };

  }


  componentDidMount() {
    // fetch('/videos')
    // .then(res => res.json())
    // .then(videos => this.setState({ videos }));
    
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
    
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));

    const fetchPosts = async () => {
      this.setState({loading:true});
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({comments:res.data});
      this.setState({loading:false});
    };

    fetchPosts();
  }

  componentDidUpdate(){
  }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
    
  //   return body;
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
    
  //   this.setState({ responseToPost: body });
  // };

  paginate = (pageNumber) => this.setState({currentPage:pageNumber})
 
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
    const currentPosts = this.state.comments.slice(indexOfFirstPost,indexOfLastPost);

    return (
      <div className="container clearfix d-flex flex-column">
        <div className="row clearfix">
            <Provider store={Store}>
              <ProductsContainer />
            </Provider>
        </div>
        <div className="row d-flex flex-column">
          <ul className="list-group">
            {currentPosts.map(comment =>
            <li className = "list-group-item" key = {comment.id}> {comment.userId} ,{comment.title}</li>
            )}
          </ul>
          <Pagination itemsPerPage={this.state.itemsPerPage} totalItems={this.state.comments.length} currentPage={this.state.currentPage} paginate={this.paginate}/>
        </div>
      </div>
    );
  }
}

export default App;


{/* <div className="App">
  <h1>Users</h1>
  {this.state.users.map(user =>
    <div key={user.id}>{user.username}</div>
  )}
  <h1>Videos</h1>
  {this.state.videos.map(video =>
    <div key={video.id}>{video.title},{video.genre},{video.description}</div>
  )}
</div>
<div className="App">
  <p>{this.state.response}</p>
  <form onSubmit={this.handleSubmit}>
    <p>
      <strong>Post to Server:</strong>
    </p>
    <input
      type="text"
      value={this.state.post}
      onChange={e => this.setState({ post: e.target.value })}
    />
    <button type="submit">Submit</button>
  </form>
  <p>{this.state.responseToPost}</p>
</div> */}

