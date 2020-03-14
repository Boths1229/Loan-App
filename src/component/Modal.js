import React, { Component } from 'react';

class Modal extends Component {
    render() {
        if (!this.props.modalOpen) {
            return null
        }
        return(
            <div>
        <div><h5>i am a modal</h5></div>
      </div>
        )
    }
}

export default Modal;