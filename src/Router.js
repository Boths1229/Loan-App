import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import LoanRepayment from './pages/loanRepayment';
import RequestLoan from './pages/requestLoan';
import Navigation from './Navigation';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Switch>
         <Route exact path='/' component={Navigation} />
         <Route exact path='/signin' component={Signin} />
         <Route exact path='/signup' component={Signup} />
         <Route exact path='/loanRepayment' component={LoanRepayment} />
         <Route path='/requestLoan' component={RequestLoan} />
    </Switch>
    </BrowserRouter>
);

export default Router;