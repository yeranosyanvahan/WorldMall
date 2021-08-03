import React from 'react';
import {Product} from '../lib/index.js'
function Main() {
  let params={'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg','price':'10$'}
  return (
    <main className='counter'>
          <Product params={params}/>
    </main>
  );
}
export default Main;
