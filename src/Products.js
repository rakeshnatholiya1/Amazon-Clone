import React from "react";
import "./css/Products.css";

function Products({ productsList, addToCart }) {
  console.log(productsList);
  return (
    <div className="products_wrap">
      {productsList.map((item) => {
        return (
          <>
            <div className="product" key={item}>
              <img src={item[0].image.url} alt="" />

              <h3>{item[0].name}</h3>

              <p>{item[0].price.formatted_with_symbol}</p>
              <button onClick={() => addToCart(item.id, 1)}>Add to Cart</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Products;
