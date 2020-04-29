import React,{PureComponent} from 'react';
import Product from './Product';
import Pagination from '../Pagination'
const products = [
  {
   id:1,
   name:'espresso',
   description:'dark coffee',
   img:'http://tachyons.io/img/avatar_1.jpg',
   price: 4 
  },
  {
    id:2,
    name:'capuccion',
    description:'dark coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 5
   },
   {
    id:3,
    name:'latte',
    description:'dark coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 3
   },
   {
    id:4,
    name:'coffee',
    description:'dark coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 4 
   },
   {
    id:5,
    name:'espresso mild',
    description:'dark coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 2
   },
   {
    id:6,
    name:'black coffee',
    description:'black coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 6
   },
   {
    id:7,
    name:'espresso extra mild',
    description:'dark coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 7
   },
   {
    id:8,
    name:'mocha mild',
    description:'mocha coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 3
   },
   {
    id:9,
    name:'mocha extreme',
    description:'mocha coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 5
   },
   {
    id:10,
    name:'mocha cold',
    description:'dark coffee',
    img:'http://tachyons.io/img/avatar_1.jpg',
    price: 6
   }
];

class Products extends PureComponent{
    constructor(){
        super();
        this.state = {
            currentPage:1,
            itemsPerPage:4
        }
    }

    handleAddProduct = (product) => {
        // console.log("clicked",product);
        // console.log("this",this.state);
        this.props.addToCartAction(product);
    }

    paginate = (pageNumber) => this.setState({currentPage:pageNumber})

    render(){
        const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
        const currentPosts = products.slice(indexOfFirstPost,indexOfLastPost);

        return (
        <>
        <div className="d-flex align-content-start flex-wrap">
            {currentPosts.map(product => 
            <Product key={product.id} {...product} addProd={this.handleAddProduct}/>)
            }
        </div>
        <Pagination itemsPerPage={this.state.itemsPerPage} totalItems={products.length} currentPage={this.state.currentPage} paginate={this.paginate}/>
        </>
        );
    }
}

export default Products;