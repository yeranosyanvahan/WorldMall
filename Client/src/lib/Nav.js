import React from 'react';
import {SearchBar, Dispatch} from './index.js';
import {Link} from 'react-router-dom';
function Nav() {
const {login, cart} = Dispatch()
return (
<nav >
  <Link to="/">Home</Link>
  <SearchBar />
  {Object.values(cart).length | login
    ? <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
    : <Link to="/signin">Sign In</Link>
  }

</nav>
);
}

export default Nav;
