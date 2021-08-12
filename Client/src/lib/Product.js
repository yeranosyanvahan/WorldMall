import React from 'react';

function Product({children,params:{id,description,src, price=''}}) {
  return (
          <div className="product">
             <div className="description">{description}</div>
             <div className="centeredflex blackpicture">
               <img alt={description} src={src} style={{opacity:"var(--product-opacity)", width:"100%"}}/>
             </div>
             <div className="bottom">
               <div className="price">{price}$</div>
               {children}
             </div>
          </div>
  );
}

export default Product;
