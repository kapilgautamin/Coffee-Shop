import React from 'react';

const Product = ({id,name,description,img,price,addProd}) => {

    return (
        <div class="card w-20">
                <img src={img} class="img-thumbnail w-75 p-1 img-fluid" alt={name}/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text">${price}</p>
                    <div>
                    <button type="button" className="btn btn-success" 
                    onClick={() => addProd({id,name,description,img,price,units:1})}
                    >Add</button>
                    </div>
                </div>
        </div>
        
        // <div>
        // <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
        // <div className="tc">
        //     <img src={img} className="br-100 h3 w3 dib" title={name} alt={name}/>
        //     <h1 className="f4">{name}</h1>
        //     <hr className="mw3 bb bw1 b--black-10" />
        // </div>
        // <p className="lh-copy measure center f6 black-70">
        //     {description}
        // </p>
        // <span>${price}</span>
        // </article>
        // <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-green"
        // onClick={() => addProd({id,name,description,img,price,units:1})}
        // >Add</button>
        // </div>
    );
}

export default Product;

