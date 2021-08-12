import React, {useState,useEffect} from 'react';
import {API,Product, Dispatch} from '../lib/index.js'
import {Link} from 'react-router-dom'



function Page({match:{params:{search}}}) {
let [products,Setproducts]=useState([{}])
useEffect(()=>{ API("Search",{'call':search}).then((Result)=>{Setproducts(Result)})}, [search])
const {cart,Action}=Dispatch()

return (
  <main className='counter'>
        {products.map((sample)=>{return (
          <Product params={sample} >
            {!cart[sample.id]
            ? <button onClick={()=>{Action("Add",sample)}}>Add to Cart</button>
            : <button style={{backgroundColor:'blue'}}><Link to="/cart" style={{color:'black'}}>Visit Cart</Link></button>}
          </Product>)})}
  </main>
);
}

export default Page;
