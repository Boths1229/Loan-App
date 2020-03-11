import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            duration: 0,
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
       let monthlyPay = parseFloat(this.state.amount / (Math.pow(1+this.state.interest, this.state.duration)-1) / 
       (this.state.interest * Math.pow(1+this.state.interest, this.state.duration)));
       const loanInterest = parseFloat((this.state.interest / this.state.duration) * this.state.amount);
       const totalPay = parseFloat(this.state.amount + loanInterest);

       this.setState({
           monthlyPayment: monthlyPay,
           totalAmount: totalPay
       })
   }
   handleCalculations() {
       return this.calcMonthlyPayment();
   }

    render() {
        return(
            <div>
             <form>
                 <label>
                     Amount
                     <input type='text' placeholder='enter amount' 
                     validate
                     value={this.state.amount} 
                     onChange={(e) => {
                         this.setState({ amount: e.target.value })
                     }} 
                     />
                 </label> <br /><br />
                 <label>
                     Duration(months)
                     <input type='text' placeholder='duration' 
                     validate
                     value={this.state.duration} 
                     onChange={(e) => {
                         this.setState({ duration: e.target.value })
                     }} 
                     />
                 </label><br /><br />
                 <label>
                    Account details
                     <input type='text' placeholder='account name' 
                     validate
                     value={this.state.accountName} 
                     onChange={(e) => {
                         this.setState({ accountName: e.target.value })
                     }} 
                     /><br />
                     <input type='text' placeholder='account number' 
                     validate
                     value={this.state.accountNumber} 
                     onChange={(e) => {
                         this.setState({ accountNumber: e.target.value })
                     }} 
                     /><br />
                     <input type='text' placeholder='bank name' 
                     validate
                     value={this.state.bankName} 
                     onChange={(e) => {
                         this.setState({ bankName: e.target.value })
                     }} 
                     />
                 </label> <br /> <br />
                 <input type='submit' placeholder='Submit' onClick={this.handleCalculations} />
             </form>
             <div>
                   <h2>Total Amount to pay back: {this.state.totalAmount}</h2>
                   <h2>Your monthly payment is: {this.state.monthlyPayment} </h2>
                </div>
            </div>
        )
    }
}

export default Form;