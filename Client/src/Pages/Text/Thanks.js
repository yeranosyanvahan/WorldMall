import React from 'react';
function Thanks({match:{params:{reason}}}) {
return (
  <div className="text_only">
    <h1>Thanks for {reason}</h1>
  </div>

);
}

export default Thanks;
