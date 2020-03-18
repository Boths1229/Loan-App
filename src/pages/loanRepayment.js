import React, { Component } from 'react';
import '../index.css';

class LoanRepayment extends Component { 
    render() {
        return (
            <div className='tc'>
                <div>
                    <h1 style={{color: 'orange'}}>Hello: {this.props.location.state.name}</h1><br />
                    <h3 id='title'>Below is your current loan status</h3>
                </div>
                 <table id='loans' className='f3'>
                 <tbody>
                     <tr>
                        <th>Fullname</th>
                        <th>date</th>
                        <th>amount</th>
                     </tr>
                         <tr>
                             <td>{this.props.location.state.name}</td>
                             <td>{this.props.location.state.date}</td>
                             <td>{this.props.location.state.amount}</td>
                         </tr>
                     </tbody>
                 </table>
                <h2>Thank you for your payments so far, we look forward to the payment completion!</h2>
            </div>
        )
    }
}

export default LoanRepayment;