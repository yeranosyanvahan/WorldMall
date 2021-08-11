import React, {useState} from 'react';
import {Product} from '../lib/index.js';
import {Link, useHistory} from 'react-router-dom';

function Feedback() {
  let params=[{'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg', price:100},
  {'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg', price:250},
  {'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg', price:30},
  {'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg', price:30},
  {'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg', price:100}]


  const [Quantity, SetQuantity]=useState(Object.assign({}, new Array(params.length).fill(1)))
  const history = useHistory()

  return (
    <>
    <fieldset className='cart'>
      <legend>Shopping Cart</legend>
      <main>
        {params.map(({price,...sample},index)=>{
          return (
          <Product params={{price:price*Quantity[index],...sample}}>
            <div className="quantity">Quantity:&ensp;
              <input type="number" min="0" step="1" defaultValue="1"  onChange={({target:{value:number}})=>{SetQuantity({...Quantity, [index]:number})}}/>
            </div>
            <Link to={`/Search/id/${index}`}> Search for Similar Items</Link>
          </Product>
        )})}
        <div className="checkout">
         <div>{Object.values(Quantity).filter(sample=>sample!==0).length} types of products</div>
         <div>Total: {params.map((sample,index)=>{return sample.price * Quantity[index]}).reduce((a, b) => a + b)}$</div>
         <button onClick={() => {history.push('/checkout')}} className="colorbutton" style={{'padding':'.5rem'}}> Proceed to Checkout</button>
        </div>
      </main>
    </fieldset>
    </>
  )}

export default Feedback;
