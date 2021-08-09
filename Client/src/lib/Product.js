import React from 'react';

function Product({children,params:{description,src, price=''}}) {
  return (
          <div className="product">
             <div className="description">{description}</div>
             <picture className="centeredflex blackpicture">
               <img alt={description} src={src} style={{opacity:"var(--product-opacity)", width:"100%"}}/>
             </picture>
             <div className="price">{price}</div>
             {children}
          </div>
  );
}

export default Product;
