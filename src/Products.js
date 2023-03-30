import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Products.css";

function Products({ productsList, addToCart, fetchProductsbyCategories }) {
  console.log(productsList[0])
  let { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    if (slug) {
      fetchProductsbyCategories(slug);
    }
  }, [slug]);
  return (
    <div className="products_wrap">
      {productsList.map((prod) => {
        return (
          <>
          <div className="product_main">
            <div className="product" key={prod}>
              <img src={prod?.image.url} alt="" />

              <h3>{prod?.name}</h3>

              <p>{prod?.price.formatted_with_symbol}</p>
              <button onClick={() => addToCart(prod?.id, 1)}>
                Add to Cart
              </button>

              <div className="product_description">

             <p> {prod?.description.replace(/(<([^>]+)>)/gi, "")} </p>

              </div>
            </div>
              
              </div>
          </>
        );
      })}
    </div>
  );
}

export default Products;
