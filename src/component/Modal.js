import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import '../index.css';

class ModalLoan extends Component {
    render () {
      const { isOpen, onClose, modalLoan} = this.props;
      const { fullName, email, date, amount, homeAddress, officeAddress, verified } = modalLoan;
      return (
        <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{fullName}</p>
        <p>{email}</p>
        <p>{date}</p>
        <p>{amount}</p>
        <p>{homeAddress}</p>
        <p>{officeAddress}</p>
        <p>{verified}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }

export default ModalLoan;