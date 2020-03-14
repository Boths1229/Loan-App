import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Form from './form';
import { Loans, DetailLoans } from './loans';

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
            const loan = DetailLoans.filter(loan => {
                return loan.email === this.props.location.state.email;
            })
          return <Redirect to={{pathname: '/./loanRepayment',
                          state: {
                            name: loan[0].fullName,
                            email: loan[0].email,
                            amount: loan[0].amount,
                            date:   loan[0].date,
                            repayment: loan[0].repayment,
                            balance:  loan[0].balance
                          }
  }} />
       
        }
       if(this.state.noLoan) {
           alert('you currently do not have any loan outstanding! you can apply for a loan now')
           return
       }

        return (
            <div> 
                <div className='tc'>
                <h1 style={{color: 'orange'}}><i>welcome:</i> {this.props.location.state.name}</h1>
                <h2>How much do you want? </h2>
                <h4>Fill the form and see how much total you will pay back and also your monthly repayment</h4>
                </div>
                <Form /> <br />
                <label className='tc'>
                    <h3>Click here to view your loan repayment    
                     <Button onClick={this.handleRepaymentView}> 
                        View
                    </Button> 
                    </h3>
                </label>
            </div>
        )
    }
}

export default RequestLoan;