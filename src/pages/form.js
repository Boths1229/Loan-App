import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import '.././App.css';
import ModalApplyLoan from '../component/ModalLoan';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email: '',
            date: '',
            homeaddress: '',
            officeaddress: '',
            amount: 0,
            years: 1,
            accountName: '',
            accountNumber: 12234333,
            bankName: '',
            interest: 0.075,
            monthlyPayment: 0,
            totalAmount: 0,
            modalOpen: false,
            // modalLoan: []
        }
        this.handleCalculations = this.handleCalculations.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
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

   closeModal() {
    this.setState({
      modalOpen:false
    })
  }

  openModal() {
    this.setState({
      modalOpen:true
    })
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
                 <Button onClick={this.handleCalculations} >Submit
                 </Button><br /><br />
                 <div>
                   <h2>Total Amount to pay back: #{Math.round(this.state.totalAmount)}</h2>
                   <h2>Your monthly payment is: #{Math.round(this.state.monthlyPayment)} </h2>
                </div> <br />
                <div>
                    <h2 style={{color: 'white'}}>Click here to apply for this loan 
                     <Button onClick={this.openModal}>Apply</Button> </h2>
                    <ModalApplyLoan amount={this.state.amount} totalAmount={this.state.totalAmount}
                        onClose={this.closeModal} isOpen={this.state.modalOpen}
                        accountName={this.state.accountName} accountNumber={this.state.accountNumber}
                        bankName={this.state.bankName} fullname={this.state.fullname} email={this.state.email}
                        date={this.state.date} homeaddress={this.state.homeaddress} officeaddress={this.state.officeaddress} >
                        
                     </ModalApplyLoan>
                </div>
             </form> 
             
            </div>
        )
    }
}

export default Form;