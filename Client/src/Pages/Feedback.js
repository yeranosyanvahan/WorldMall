import React from 'react';
function Feedback() {
  return (
  <div className="preforum">
    <form action="https://example.local/signup" target="_blank" method="post" autocomplete="on">
      <fieldset>
        <legend>Leave Feedback</legend>

        <label for="username">Email or Username</label>
        <input type="text" id="username" name="username" required/>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="10"></textarea>

        <input type="submit" value="Send the Feedback" />
      </fieldset>
    </form>
    Note: You must have an account to give feedback
  </div>
)}

export default Feedback;
