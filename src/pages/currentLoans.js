import React, { Component } from 'react';
import { Loans, DetailLoans } from '../pages/loans';
import Modal from '../component/Modal';
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
         this.openModal = this.openModal.bind(this);
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
               <td onClick={this.openModal}>{this.state.verified}</td>
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

 getLoan(id) {
  const loan = this.state.detailLoan.find(item => item.id === id);
  return loan;
}

openModal(id) {
  const loan = this.getLoan(id);
  this.setState({
      modalLoan:loan,
     modalOpen:true
  })
}

closeModal() {
  this.setState({
    modalOpen:false
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
                {this.state.modalOpen && <Modal closeModal={this.state.modalOpen} ><h5>i am a modal</h5></Modal>}
               </tbody>
            </table>
            </div>
        )
    }
}


export default CurrentLoans;