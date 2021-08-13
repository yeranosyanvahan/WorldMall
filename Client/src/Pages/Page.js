import React, {useState,useEffect} from 'react';
import {API,Product, Dispatch} from '../lib/index.js'
import {Link} from 'react-router-dom'



function Page({match:{params:{search}}}) {
let [products,Setproducts]=useState([{'id':'1','description':'description','src':'https://m.media-amazon.com/images/I/81WjXgpKX4L._AC_UL320_.jpg','price':10}])
let [nothingfound, Setnothingfound]= useState(false)
useEffect(()=>{
 function pseudoSetproducts(products){
      if(!products.length) {Setnothingfound(`No match was found for '${search}'`); return}
      Setnothingfound(false)
      Setproducts(products)
    }
 API("Search",{'call':search}).then(pseudoSetproducts
)}, [search])
const {cart,Action}=Dispatch()

return (
<>
   {
   nothingfound &&
   <div className="text_only">
         <div>{nothingfound}</div>
   </div>
   }
   <main className='counter'>
        {products.map((sample)=>{return (
          <Product params={sample} key={sample.id} >
            {!cart[sample.id]
            ? <button key={sample.id} onClick={()=>{Action("Add",sample)}}>Add to Cart</button>
            : <button key={sample.id} style={{backgroundColor:'blue'}}><Link to="/cart" style={{color:'black'}}>Visit Cart</Link></button>}
          </Product>)})}
  </main>
</>);
}

export default Page;
