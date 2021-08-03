import React from 'react';
import {SearchBar} from './index.js';
import {Link} from 'react-router-dom';
function Nav() {
return (
<nav >
  <Link to="/">Home</Link>
  <SearchBar />
  <Link to="/signin">Sign In</Link>
</nav>
);
}

export default Nav;
