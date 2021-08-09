import React from 'react';
import config from '../../config.json'
import {Submit} from "../../lib/index.js"
function Feedback() {
  return (
  <div className="preforum">
    <form action={config.API.hostname+"/signup"}  onSubmit={Submit.feedback} target="_blank" method="post" autoComplete="on">
      <fieldset>
        <legend>Leave Feedback</legend>

        <label htmlFor="username">Email or Username</label>
        <input type="text" id="username" name="username" required/>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="10"></textarea>

        <input type="submit" value="Send the Feedback" />
      </fieldset>
    </form>
    Note: You must have an account to give feedback
  </div>
)}

export default Feedback;
