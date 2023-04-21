import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Products.css";

function Products({ productsList, addToCart, fetchProductsbyCategories }) {
  const [loading, setLoading] = useState(true); // add loading state

  let { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    setLoading(true); // set loading to true before fetching products

    if (slug) {
      fetchProductsbyCategories(slug).then(() => {
        setLoading(false); // set loading to false after fetching products
      });
    } else {
      setLoading(false); // set loading to false if there's no category slug
    }
  }, [slug]);

  if (loading) {
    return <div className="product_loder">
      <img src="https://media.tenor.com/YPOStjIfQ2IAAAAC/loading-waiting.gif" alt="loding..." />
      </div> // show loading indicator if products are still loading
  }

  return (
    <div className="products_wrap">
      {productsList.map((prod) => {
        return (
          <div className="product_main" key={prod.id}>
            <div className="product">
              <img src={prod?.image?.url} alt="" />
              <h3>{prod?.name}</h3>
              <p>{prod?.price?.formatted_with_symbol}</p>
              <button onClick={() => addToCart(prod?.id, 1)}>
                Add to Cart
              </button>
              <div className="product_description">
                <p>{prod?.description?.replace(/(<([^>]+)>)/gi, "")}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
