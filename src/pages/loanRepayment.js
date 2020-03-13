import React, { Component } from 'react';

class LoanRepayment extends Component { 
    render() {
        return (
            <div className='tc'>
                <div>
                    <h1>Hello: {this.props.location.state.name}</h1>
                    <h3>Below is your current loan status</h3>
                </div>
                <h2>Your loaned amount: {this.props.location.state.amount}</h2>
                <h2>Date of disbursement: {this.props.location.state.date}</h2>
                <h2>Total repayment so far: {this.props.location.state.repayment}</h2>
                <h2>Balance: {this.props.location.state.balance}</h2>
                <h2>Thank you for your payments so far, we look forward to the payment completion!</h2>
            </div>
        )
    }
}

export default LoanRepayment;