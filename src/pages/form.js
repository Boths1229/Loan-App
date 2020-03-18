import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import '../App.css';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            years: 1,
            accountName: '',
            accountNumber: 12234333,
            bankName: '',
            interest: 0.075,
            monthlyPayment: 0,
            totalAmount: 0
        }
        this.handleCalculations = this.handleCalculations.bind(this);
    }

   calcMonthlyPayment() {
    let { amount, years } = this.state;

    if (1000 < amount && amount < 5000) {
      this.setState({ interest: 0.05 });
    }
    if (5000 < amount && amount < 10000) {
      this.setState({ interest: 0.1 });
    }
    if (10000 < amount && amount < 15000) {
      this.setState({ interest: 0.15 });
    }
    if (15000 < amount && amount < 20000) {
      this.setState({ interest: 0.2 });
    }

    let decimalFormat = this.state.interest + 1;
    let totalOwed = decimalFormat * amount;
    let monthlyRepay = totalOwed / (years * 12);

       this.setState({
           monthlyPayment: monthlyRepay,
           totalAmount: totalOwed
       })
   }
   handleCalculations() {
       return this.calcMonthlyPayment();
   }

    render() {
        return(
            <div className='container'>
             <form className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
                 <label>
                     Amount
                     <input type='text' placeholder='enter amount' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={this.state.amount} 
                     onChange={(e) => {
                         this.setState({ amount: e.target.value })
                     }} 
                     />
                 </label> <br /><br />
                 <label>
                     Duration(years)
                     <input type='text' placeholder='duration' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={this.state.years} 
                     onChange={(e) => {
                         this.setState({ years: e.target.value })
                     }} 
                     />
                 </label><br /><br />
                 <label>
                    Account details
                     <input type='text' placeholder='account name' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={this.state.accountName} 
                     onChange={(e) => {
                         this.setState({ accountName: e.target.value })
                     }} 
                     /><br />
                     <input type='text' placeholder='account number' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={this.state.accountNumber} 
                     onChange={(e) => {
                         this.setState({ accountNumber: e.target.value })
                     }} 
                     /><br />
                     <input type='text' placeholder='bank name' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={this.state.bankName} 
                     onChange={(e) => {
                         this.setState({ bankName: e.target.value })
                     }} 
                     />
                 </label> <br /> <br />
                 <Button onClick={this.handleCalculations} >Submit
                 </Button><br /><br />
                 <div>
                   <h2>Total Amount to pay back: #{Math.round(this.state.totalAmount)}</h2>
                   <h2>Your monthly payment is: #{Math.round(this.state.monthlyPayment)} </h2>
                </div> <br />
                <div>
                    <h2 style={{color: 'white'}}>Click here to apply for this loan <Button>Apply</Button> </h2>
                </div>
             </form> 
             
            </div>
        )
    }
}

export default Form;