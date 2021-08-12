import React, { Suspense } from 'react';
import {Nav, Footer, Store} from './lib/index.js'
import {Page, Main, Aboutus, Signup, Signin, Contactus, Feedback, Policy, Cart, Sorry, Thanks, Checkout} from './Pages/index.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Nav />
        <Suspense fallback={<div className="text_only"><h1>Loading ...</h1></div>}>
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
            <Route path="/thanks/:reason" component={Thanks} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/" component={Sorry} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </Provider>
  );
}
export default App;
