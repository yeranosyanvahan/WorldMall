import React from 'react';

function Product({params}) {
  let {description,src,price}=params;
  return (
          <div className="product">
             <div className="description">{description}</div>
             <picture className="centeredflex blackpicture">
               <img src={src} style={{opacity:"var(--product-opacity)", width:"100%"}}/>
             </picture>
             <div className="price">{price}</div>
          </div>
  );
}

export default Product;
