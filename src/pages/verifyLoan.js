import React, { Component } from 'react';

class VerifyLoan extends Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }
    render() {
        return(
            <div>
                <h2>Welcome back Admin: {this.props.location.state.name}</h2>
                <h3>Enjoy your day!</h3>
            </div>
        )
    }
}

export default VerifyLoan;