import React, {useState,useEffect} from 'react';
import {API,Product} from '../lib/index.js'

function process(Search) {
  return {description:Search['product'],src:Search['~products'][0]['~products|src'],price:Search['stores'][0]['stores|price']}
}

function Page({match:{params:{search}}}) {
let [products,Setproducts]=useState([{'description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg','price':'10$'}])
useEffect(()=>{ API("Search",search).then(({Search})=>{Setproducts(Search.map(process))})})

return (
  <main className='counter'>
        {products.map((sample)=>{return <Product params={sample} ><div>+</div></Product>})}
  </main>
);
}

export default Page;
