import React from 'react';
import {SearchBar} from './index.js';
import {Link} from 'react-router-dom';
function Footer() {
return (
<footer>
 <div><Link to="/aboutus">About Us</Link></div>
 <div><Link to="/contactus">Contuct Us</Link></div>
 <div><Link to="/feedback">Give Feedback</Link></div>
 <div className="wide"><Link to="/policy">Conditions of Use and Privacy Notice</Link></div>
 <div className="wide">© All Rights Reserved</div>
 <div className="wide">Designer and creator: Vahan Yeranosyan</div>
</footer>
);
}

export default Footer;
