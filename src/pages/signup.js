import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap';
import '../index.css';
// import { Data } from '../pages/data';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            confirmEmail: '',
            password: '',
            Users: [],
            registered: false,
            notRegistered: false,
            emailConfirmed: true
        }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

componentDidMount() {
    fetch('https://wayfarerr.herokuapp.com/api/v1/users')
    .then(res => res.json())
    .then((data) => {
        this.setState({ Users: data })
    })
    .catch(console.log)
    }

checkEmail () {
    const register = this.state.Users.data.map(data => {
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
            <div className='tc'>
                <form className='tc bg-light-green dib br3 pa3 ma5 bw2 shadow-5'>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"
                    value={this.state.firstname}
                    onChange={(e) => {
                      this.setState({
                        firstname: e.target.value
                      })
                    }}
                     />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"
                    value={this.state.lastname}
                    onChange={(e) => {
                      this.setState({
                        lastname: e.target.value
                      })
                    }}
                     />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({
                        email: e.target.value
                      })
                    }}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Email</label>
                    <input type="email" className="form-control" placeholder="Enter password" 
                    value={this.state.confirmEmail}
                    onChange={(e) => {
                      this.setState({
                        confirmEmail: e.target.value
                      })
                    }}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({
                        password: e.target.value
                      })
                    }}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
            </div>
        )
    }
}

export default Signup;