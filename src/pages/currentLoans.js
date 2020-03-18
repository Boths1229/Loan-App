import React, { Component } from 'react';
import ModalLoan from '../component/Modal';
import '../index.css';



class CurrentLoans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loans: [],
            modalOpen: false,
            modalLoan: [],
            isVerified: false,
            isApproved: false,
            verified: 'No',
            approved: 'No'
        }
         this.closeModal = this.closeModal.bind(this);
         this.verifyLoan = this.verifyLoan.bind(this);
    }

    componentDidMount() {
      fetch('https://wayfarerr.herokuapp.com/api/v1/loans')
      .then(res => res.json())
      .then((user) => {
        this.setState({ loans: user.data })
      })
      .catch(console.log)
    }

    renderTableData() {
      return this.state.loans.map((loan, index) => {
         const { id, fullname, email, date, amount} = loan //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{fullname}</td>
               <td>{email}</td>
               <td>{date}</td>
               <td>{amount}</td>
               <td onClick={() => {
                 const singleLoan = this.state.loans.filter(item => item.id === loan.id)[0];
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
      console.log(this.state.loans)
        return(
               <div className='tc'>
               <h2>Hello Admin: {this.props.location.state.name}</h2><br />
               <h1 id='title'>Applied Loans</h1>
               <table id='loans' className='f3'>
               <tbody>
                 <tr>
                   <th>ID</th>
                   <th>FULLNAME</th>
                   <th>EMAIL</th>
                   <th>DATE</th>
                   <th>AMOUNT</th>
                   <th>VERIFIED</th>
                   <th>APPROVED</th>
                 </tr>
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