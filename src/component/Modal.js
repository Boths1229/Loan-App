import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import '../index.css';

class ModalLoan extends Component {
    render () {
      const { isOpen, onClose, modalLoan, verified, approved, verifyLoan } = this.props;
      console.log(verifyLoan)
      const { fullName, email, date, amount, homeAddress, officeAddress} = modalLoan;
      return (
        <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Individual Detail loan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>FullName: {fullName}</p>
        <p>Email: {email}</p>
        <p>Date: {date}</p>
        <p>Amount: {amount}</p>
        <p>HomeAddress: {homeAddress}</p>
        <p>OfficeAddress: {officeAddress}</p>
        <p>Verified: {verified}</p>
        <p>Approved: {approved}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => verifyLoan()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }

export default ModalLoan;