import React from 'react';
import './ProductList.css';

const ProductList = (props) => {
  
 
  return (
  <div className = 'products_container'>
    {
      props.products.map((product, index) => {   
        return (
          <div className="product_container" key={product.id}>
            <div className="product_name">{product.label}</div>
	          <div className="product_price">Price: {product.priceLabel}</div>
            <div className="product_available">Available: {product.units}</div>
	          <button onClick={()=>props.buyProduct(product.id)} className="product_buy_btn">Buy</button>
          </div>
        )
      })
    }
  </div>  

  )
  
}

export default ProductList;
