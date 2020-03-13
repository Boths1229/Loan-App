import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div style={{color: 'black'}} className='tc f3' >
          <h1 className='text-capitalize'>Wont you rather deal with us?</h1>
          <p><b>Our loans are deposited within hours. We are fast in our transaction, which makes us the customers <i>number one choice</i></b></p>
          <p><b>Use this link to <NavLink to='/signup'>
           Register
          </NavLink> with us and enjoy our wonderful benefits </b></p>
          <p><b>If you have already registered, you can <NavLink to='/signin'>
            Login
          </NavLink> into your account from here.</b></p>
        </div>
        )
    }
}

export default Home;