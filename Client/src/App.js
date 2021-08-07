import React, {lazy, Suspense } from 'react';
import {Nav, Footer} from './lib/index.js'
import {Page, Main, Aboutus, Signup, Signin, Contactus, Feedback, Policy, Cart} from './Pages/index.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Pages/page.css'


function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/policy" component={Policy} />
          <Route path="/cart"component={Cart}/>
          <Route path="/search/:search" component={Page} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
