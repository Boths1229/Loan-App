import React, { Component } from "react";
import 'bootstrap';
import { Redirect } from 'react-router-dom';
import '../index.css';

class Signin extends Component {
  constructor(props) {
      super(props)
      this.state = {
        email:     '',
        password:  '',
        Users:      [],
        registered:   false,
        notRegisterd: false,
        isAdmin:      false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch('https://wayfarerr.herokuapp.com/api/v1/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ Users: data })
    })
    .catch(console.log)
  }
  checkRegister() {
    const isRegistered = this.state.Users.data.filter((data) => {
      return (data.email === this.state.email && data.first_name === this.state.password
       );
    })
    const admin = this.state.Users.data.filter((data) => {
      return ( data.email === this.state.email && data.first_name === this.state.password && data.is_admin );
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
    
    console.log(this.state.Users.data)
  if (this.state.isAdmin) {
    const admin = this.state.Users.data.filter((data) => {
      return ( data.email === this.state.email && data.first_name === this.state.password && data.is_admin );
    })
    return <Redirect to={{pathname: '/currentLoans',
                          state: {
                            name: admin[0].first_name,
                            email: admin[0].email
                          }
  }} />
  }

  if (this.state.registered) {
    const isRegistered = this.state.Users.data.filter((data) => {
      return (data.email === this.state.email && data.first_name === this.state.password
       );
    })
    return <Redirect to={{pathname: '/requestLoan',
                          state: {
                            name: isRegistered[0].first_name,
                            email: isRegistered[0].email
                          }
  }} />
  } 

  if (this.state.notRegisterd) {
      alert('please fill in your correct email and password')
      return 
  }
  return (
    <div className='tc'>
    <form className='tc bg-light-green dib br3 pa3 ma5 bw2 shadow-5'>
                <h3>Sign In</h3>

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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit} >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
       </div>   
  );
  }
};

export default Signin;

