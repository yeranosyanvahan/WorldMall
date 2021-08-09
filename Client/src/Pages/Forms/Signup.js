import React from "react";
import {Link} from 'react-router-dom';
import config from '../../config.json'
import {Submit} from "../../lib/index.js"
function Signup (){
return (
  <div className="preforum">
    <form action={config.API.hostname+"/signup"} onSubmit={Submit.signup} target="_blank" method="post" autoComplete="on">
      <fieldset>
        <legend>Create Account</legend>

        <label htmlFor="fname" className="required">Your name</label>
        <input type="text" id="fname" name="fname" autoComplete='given-name' required/>

        <label htmlFor="username" className="required" >Username</label>
        <input type="text" id="username" name="username" autoComplete='username' required/>

        <label htmlFor="email" className="required">Email</label>
        <input type="email" id="email" name="email" autoComplete='email'  required/>

        <label htmlFor="password" className="required">Password</label>
        <input type="password" id="password" name="password" autoComplete='new-password' required/>

        <label htmlFor="confirmpassword" className="required">Re-enter password</label>
        <input type="password" id="confirmpassword" name="confirmpassword"  required/>

        <div>
          <input type="radio" id="customer" name="position" value="customer" checked readOnly />
          <label htmlFor="customer">Customer</label>
          <input type="radio" id="shop" name="position" value="shop" />
          <label htmlFor="shop">Shop</label>
        </div>

        <input type="submit" value="Create Account" />
      </fieldset>
    </form>
    <div>Already have an account? <Link to="/signin">Sign in</Link></div>
  </div>
);};

export default Signup;
