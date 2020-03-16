import React, { Component } from 'react';
import { Loans, DetailLoans } from '../pages/loans';
import ModalLoan from '../component/Modal';
import '../index.css';



class CurrentLoans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loans: Loans,
            detailLoan: DetailLoans,
            modalOpen: false,
            modalLoan: DetailLoans,
            isVerified: false,
            isApproved: false,
            verified: 'No',
            approved: 'No'
        }
         this.closeModal = this.closeModal.bind(this);
         this.verifyLoan = this.verifyLoan.bind(this);
    }

    renderTableData() {
      return this.state.loans.map((loan, index) => {
         const { id, fullName, email, date, amount} = loan //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{fullName}</td>
               <td>{email}</td>
               <td>{date}</td>
               <td>{amount}</td>
               <td onClick={() => {
                 const singleLoan = this.state.detailLoan.filter(item => item.id === loan.id)[0];
                 this.setState({
                   modalLoan: singleLoan,
                   modalOpen: true
                 })
               }}>{this.state.verified}</td>
               <td>{this.state.approved}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
    let header = Object.keys(this.state.loans[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

closeModal() {
  this.setState({
    modalOpen:false
  })
}

verifyLoan() {
  this.setState({
    verified: 'Yes',
    approved: 'Yes'
  })
}

    render() {
        return(
               <div className='tc'>
               <h2>Hello Admin: {this.props.location.state.name}</h2><br />
               <h1 id='title'>Applied Loans</h1>
               <table id='loans' className='f3'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
        <ModalLoan isOpen={this.state.modalOpen} onClose={this.closeModal} 
        modalLoan={this.state.modalLoan} verified={this.state.verified} 
        approved={this.state.approved} verifyLoan={this.verifyLoan}>
        </ModalLoan>
            </div>
        )
    }
}


export default CurrentLoans;