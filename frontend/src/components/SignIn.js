import React from 'react';

export default class SignIn extends React.PureComponent{
  

    render(){

        return (
        <div className="dropdown">
          <button type="button" className="btn btn-info" data-toggle="dropdown">
           <i className="fa fa-sign-in" aria-hidden="true"></i>Login <span className="badge badge-pill badge-danger">{}</span>
          </button>
          <form className="dropdown-menu" style={{width:200}}>
            <div className="row total-header-section">
                <div className="col-lg-6 col-sm-6 col-6">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> <span className="badge badge-pill badge-danger">{}</span>
                </div>
                <div className="col-lg-6 col-sm-6 col-6 total-section text-right">
                  <p> Register </p>
                </div>
            </div>

            <div className="row">
                
              <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
                <button className="btn btn-primary btn-block">Login</button>
              </div>
            </div>
          </form>
      </div> 
        );
    }
}