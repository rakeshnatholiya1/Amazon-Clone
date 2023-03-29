import React from "react";
import "./css/ShoppingCart.css";
function ShoppingCart() {
  return (
    <div className="checkout">
      <div className="checout_left">
        <img
          src="https://www.thehoth.com/wp-content/uploads/2022/06/image10-1.png"
          alt=""
          className="checkout_add"
        />

        <div>
          <h3>Hello Rakesh</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
        <div className="checkout_product">
          <img
            src="https://m.media-amazon.com/images/I/61refnz8nnS._AC_UL320_.jpg"
            alt=""
          />
          <div className="checkout_product_info">
            <p className="checkout_product_title">Product Name</p>
            <p className="checkout_product_price">
              <strong>600.00 *1 = ₹ 600</strong>
            </p>
              <button>Remove from Basket</button>
          </div>
        </div>
      </div>
      <div className="checkout_right">
        <div className="subtotal">
          <p>
            Subtotal (2 items): <strong>1499.00</strong>
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This order conatin a gift
          </small>
        </div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
