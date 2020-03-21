import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';
import '../App.css';

class ModalApplyLoan extends Component {
    render () {
      const { isOpen, onClose, amount, totalAmount, accountName, accountNumber, 
        fullname, email, date, homeaddress, officeaddress, bankName } = this.props;
  
      return (
        <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Loan Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='container'>
        <label>Fullname:
            <input type='text' placeholder='your fullname' 
            className='pa3 ba b--green bg-lightest-blue'
            value={fullname}
            onChange={(e) => {
                this.setState({
                    fullname: e.target.value
                })
            }}/>
        </label><br />
        <label>Email:
            <input type='email' placeholder='email'
            className='pa3 ba b--green bg-lightest-blue'
            value={email}
             onChange={(e) => {
                this.setState({
                    email: e.target.value
                })
            }}/>
        </label><br />
        <label>Date:
            <input type='date'
            className='pa3 ba b--green bg-lightest-blue'
            date={date}
             onChange={(e) => {
                this.setState({
                    date: e.target.value
                })
            }}/>
        </label><br />
        <label>Amount:
            <input type='text' className='pa3 ba b--green bg-lightest-blue' value={amount}/>
        </label><br />
        <label>Total Amount to be paid back:
            <input type='text' className='pa3 ba b--green bg-lightest-blue' value={totalAmount}/>
        </label><br />
        <label>Home Address:
            <input type='text' placeholder='home address'
            className='pa3 ba b--green bg-lightest-blue'
            value={homeaddress}
             onChange={(e) => {
                this.setState({
                    homeaddress: e.target.value
                })
            }}/>
        </label><br />
        <label>Office Address:
            <input type='text' placeholder='office address'
            className='pa3 ba b--green bg-lightest-blue'
            value={officeaddress}
             onChange={(e) => {
                this.setState({
                    officeaddress: e.target.value
                })
            }}/>
        </label><br />
        <label> Account details
            <input type='text' placeholder='account name' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={accountName} 
                     onChange={(e) => {
                         this.setState({ accountName: e.target.value })
                     }} 
                     /><br />
            <input type='text' placeholder='account number' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={accountNumber} 
                     onChange={(e) => {
                         this.setState({ accountNumber: e.target.value })
                     }} 
                     /><br />
        <input type='text' placeholder='bank name' 
                     className='pa3 ba b--green bg-lightest-blue'
                     value={bankName} 
                     onChange={(e) => {
                         this.setState({ bankName: e.target.value })
                     }} 
                     />
         </label> <br />
        <Button variant="primary" >
            Submit
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }

export default ModalApplyLoan;