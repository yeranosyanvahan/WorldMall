import {Link} from 'react-router-dom';
import React from "react";
import config from '../../config.json'
import {Submit} from "../../lib/index.js"
function Signin (){
return (
<div className="preforum">
  <form action={config.API.hostname+"/signup"} onSubmit={Submit.signin} target="_blank" method="post" autoComplete="on">
    <fieldset>
      <legend>Sign in</legend>

      <label htmlFor="username">Email or Username</label>
      <input type="text" id="username" name="username" required/>

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required/>

      <input type="submit" value="Sign In" />

    </fieldset>
  </form>
  <div>New here? Try to <Link to="/signup">Create Account</Link></div>
</div>
);
};

export default Signin;
