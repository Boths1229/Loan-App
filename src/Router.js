import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import LoanRepayment from './pages/loanRepayment';
import RequestLoan from './pages/requestLoan';
import Navigation from './Navigation';
import VerifyLoan from './pages/verifyLoan';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Switch>
         <Route exact path='/' component={Navigation} />
         <Route exact path='/signin' component={Signin} />
         <Route exact path='/signup' component={Signup} />
         <Route exact path='/loanRepayment' component={LoanRepayment} />
         <Route exact path='/requestLoan' component={RequestLoan} />
         <Route exact path='/verifyLoan' component={VerifyLoan} />
    </Switch>
    </BrowserRouter>
);

export default Router;