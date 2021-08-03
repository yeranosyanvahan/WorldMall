import React from 'react';
import {API, Product} from '../lib/index.js';

function Feedback() {

  let params={'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg'}
  return (
    <main className='counter'>
          <Product params={params}/>
    </main>
  )}

export default Feedback;
