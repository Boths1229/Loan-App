import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import 'bootstrap';
import { Redirect } from 'react-router-dom';
import { Data } from '../pages/data'
import '../index.css';

class Signin extends Component {
  constructor(props) {
      super(props)
      this.state = {
        email:     '',
        password:  '',
        Data:      Data,
        registered:   false,
        notRegisterd: false,
        isAdmin:      false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  checkRegister() {
    const isRegistered = Data.filter((data) => {
      return (data.email === this.state.email && data.password === this.state.password
       );
    })
    const admin = Data.filter((data) => {
      return ( data.email === this.state.email && data.password === this.state.password && data.isAdmin );
    })

    if (admin[0]) {
      this.setState({
        isAdmin: true
      })
    } else if(isRegistered[0]) {
      this.setState({
        registered: true
      })
    
    } else  {
        this.setState({
            notRegisterd: true
        })
    }
  }

  handleSubmit() {
    return this.checkRegister();
  }


  render () { 
  if (this.state.isAdmin) {
    return <Redirect to={'/verifyLoan'} />
  }

  if (this.state.registered) {
    return <Redirect to={'/requestLoan'} />
  } 

  if (this.state.notRegisterd) {
      alert('please fill in your correct email and password')
      return 
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className='mt-5'>
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate 
              value={this.state.email} 
              onChange={(e)=> {
                  this.setState({email: e.target.value})
              }} />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                value={this.state.password}
                onChange={(e)=> {
                    this.setState({password:e.target.value})
                }}
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5" onClick={this.handleSubmit}>
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="/signup"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  }
};

export default Signin;