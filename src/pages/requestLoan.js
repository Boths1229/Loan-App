import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Form from './form';
import { Loans } from './loans';

class RequestLoan extends Component {
    constructor(props) {
        super(props)
        this.state = {
           currentLoan: false,
           noLoan: false,
           Loans: Loans
        }
        this.handleRepaymentView = this.handleRepaymentView.bind(this);
    }
    
   viewRepayment() {
       const loan = Loans.map(loan => {
           return loan.email;
       })
       if (loan.includes(this.props.location.state.email)) {
           this.setState({
               currentLoan: true
           })
       }else {
           this.setState({
               noLoan: true
           })
       }
   }
  
   handleRepaymentView() {
       return this.viewRepayment()
   } 

    render() {
        if( this.state.currentLoan ) {
          return <Redirect to={'./loanRepayment'} />
        }
       if(this.state.noLoan) {
           alert('you currently do not have any loan outstanding! you can apply for a loan now')
           return
       }

        return (
            <div> 
                <div>
                <h1>welcome: {this.props.location.state.name}</h1>
                <h2>How much do you want? </h2>
                <p>Fill the form and see how much total you will pay back and also your monthly repayment</p>
                </div>
                <Form />
                <label>
                    <b>Click here to view your loan repayment</b>
                    <input type='submit' onClick={this.handleRepaymentView} />
                </label>
            </div>
        )
    }
}

export default RequestLoan;