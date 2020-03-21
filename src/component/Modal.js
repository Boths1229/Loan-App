import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../index.css';

class ModalLoan extends Component {
    render () {
      const { isOpen, onClose, modalLoan, verifyLoan } = this.props;
  
      const { fullname, email, date, amount, homeaddress, officeaddress, id, verified, approved} = modalLoan;
      return (
        <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Individual Detail loan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Id : {id}</p> 
        <p>FullName: {fullname}</p>
        <p>Email: {email}</p>
        <p>Date: {date}</p>
        <p>Amount: {amount}</p>
        <p>HomeAddress: {homeaddress}</p>
        <p>OfficeAddress: {officeaddress}</p>
        <p>Verified: {verified}</p>
        <p>Approved: {approved}</p>
        <Button variant="primary" onClick={() => verifyLoan(id)}>
            Verify/Approve
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => verifyLoan(id)}>
            Verify/Approve
          </Button> */}
        </Modal.Footer>
      </Modal>
      );
    }
  }

export default ModalLoan;