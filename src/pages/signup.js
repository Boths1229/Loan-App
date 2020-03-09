import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import 'bootstrap';
import { Data } from '../pages/data';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            confirmEmail: '',
            Data: Data,
            registered: false,
            notRegistered: false,
            emailConfirmed: true
        }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

checkEmail () {
    const register = Data.map(data => {
        return (data.email)
    })

    if (register.includes(this.state.email)) {
        this.setState({
            registered: true
        })
    }else {
      this.setState({
          notRegistered: true
      })
  }
}    

handleSubmit() {
    if (this.state.email !== this.state.confirmEmail) {
        this.setState({
            emailConfirmed: false
        })
    } else {
        return this.checkEmail()
    }
}

    render() {
        if (this.state.registered) {
            alert('this email already exist')
            return 
        }
        if (!this.state.emailConfirmed) {
            alert('please enter the same email in the email boxes')
            return
        }
       if (this.state.notRegistered) {
           return <Redirect to={'./signin'} />
       }

        return (
            <div>
                <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" className='mt-5'>
                    <form>
                        <p className="h2 text-center mb-3">Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                        Your name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" 
                        value={this.state.email}
                        onChange={(e) => {
                            this.setState({
                                email: e.target.value
                            })
                        }}/>
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                        Confirm your email
                        </label>
                        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" 
                        value={this.state.confirmEmail}
                        onChange={(e) => {
                            this.setState({
                                confirmEmail: e.target.value
                            })
                        }} />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                        <div className="text-center mt-4" onClick={this.handleSubmit} >
                        <MDBBtn type="submit" className='register'>
                                Register
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