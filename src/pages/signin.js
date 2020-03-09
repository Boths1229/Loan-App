import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import 'bootstrap';
import { Redirect } from 'react-router-dom';
import '../index.css';

class Signin extends Component {
  constructor(props) {
      super(props)
      this.state = {
        email:     'boths@yahoo.com',
        password:  'makky',
        correct:false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  checkRegister() {    
    // const newEmail = this.state.email;
    // const newPassword = this.state.password;
    // this.setState({
    //     email: newEmail,
    //     password: newPassword
    //   })
    if (this.state.email === 'boths@yahoo.com' && this.state.password === 'makky') {
        console.log('its correct')
      this.setState({correct:true})
    } else {
      console.log('naaah')
    }
  }
  handleSubmit(e) {
    // const newEmail = e.target.value;
    // const newPassword = e.target.value;
    // this.setState({
    //     email: e.target.value,
    //     password: e.target.value
    //   })
    return this.checkRegister();
  }


  render () { 
  if (this.state.correct) {
    return <Redirect to={'/requestLoan'} />
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
              <MDBInput label="Your email" group type="text" validate value={this.state.email} onChange={(e)=> {
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