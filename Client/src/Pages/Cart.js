import React, {useState, useRef} from 'react';
import {Product, Dispatch} from '../lib/index.js';
import {Link, useHistory} from 'react-router-dom';

function Cart() {
  const {cart:Cartjson, login, quantity, Action} = Dispatch()
  const cart = Object.values(Cartjson)

  const history = useHistory()

  return (
    <fieldset className='cart'>
      <legend>Shopping Cart</legend>

{ ! cart.length
  ?   <div className="text_only">
        <div>Nothing in the cart Try to add something in the cart</div>
        <div>Try to {!login ? <><Link to={`/signin`}>Sign in</Link> or</> : ''} add something to the Cart</div>
      </div>
  :   <main>
      {/* Displaying products */}

      {cart.map(({price,id,...sample},index)=>{
        return (
        <Product params={{price:price*quantity[id],...sample}}>
          <div className="quantity">Qty:&ensp;
            <input type="number" min="0" step="1" defaultValue={quantity[id]} onChange={({target:{value:number}})=>{Action('Set',{id,number: parseInt(number)})}}/>
          </div>
          <Link to={`/Search/id/${index}`}> Search for Similar Items</Link>
        </Product>
      )})}
        {/* Place for checkout */}

        <div className="checkout">
           {!login ? <div><Link to={`/signin`}>Sign in</Link> or <Link to={`/signup`}>Sign up</Link></div> : ''}
           <div>Number of products: {Object.values(quantity).filter(sample=>sample!==0).length}</div>
           <div>Total: {cart.map(({price,id})=>{return price * quantity[id]}).reduce((a, b) => a + b)}$</div>
           <button onClick={() => {history.push('/checkout')}} className="colorbutton" style={{'padding':'.5rem'}}> Proceed to Checkout</button>
        </div>
      </main>}
    </fieldset>
  )}

export default Cart;
