import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import 'bootstrap';


class Signup extends Component {
    constructor(props) {
        super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

handleSubmit(e) {
   const submit= e.target.value;
    this.props.onSubmit(submit)
}

    render() {
        return (
            <div>
                <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" className='mt-5'>
                    <form onSubmit={this.handleSubmit}>
                        <p className="h2 text-center mb-3">Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                        Your name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                        Confirm your email
                        </label>
                        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                        <MDBBtn type="submit" className='register'>
                            <NavLink to='/signin'>
                                Register
                            </NavLink>
                        </MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Signup;