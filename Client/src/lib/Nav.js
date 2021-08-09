import React from 'react';
import {SearchBar} from './index.js';
import {Link} from 'react-router-dom';
function Nav() {
return (
<nav >
  <Link to="/">Home</Link>
  <SearchBar />
  <Link to="/signin" style={{display:'var(--signindisplayed)'}}>Sign In</Link>
  <Link to="/cart" style={{display:'var(--cartdisplayed)'}}><i className="fa fa-shopping-cart"></i></Link>

</nav>
);
}

export default Nav;
