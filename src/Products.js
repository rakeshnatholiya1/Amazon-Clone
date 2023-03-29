import React from "react";
import "./css/Products.css";

function Products({ productsList, addToCart }) {
  // console.log(addToCart);
  return (
    <div className="products_wrap">
      {productsList[0]?.map((prod) => {
        return (
          <>
            <div className="product" key={prod}>
              <img src={prod.image.url} alt="" />

              <h3>{prod.name}</h3>

              <p>{prod.price.formatted_with_symbol}</p>
              <button onClick={() => addToCart(prod.id, 1)}>Add to Cart</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Products;
