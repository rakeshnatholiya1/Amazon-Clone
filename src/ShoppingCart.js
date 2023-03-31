import React from "react";
import "./css/ShoppingCart.css";
function ShoppingCart({ cart, RemoveFromCart }) {
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
          <h2 className="checkout_title">Your Shopping Cart</h2>
        </div>

        {cart?.line_items?.map((item) => {
          {
            console.log(item.price);
          }
          return (
            <div className="checkout_product" key={item.id}>
              <img src={item.image.url} alt="" />
              <div className="checkout_product_info">
                <p className="checkout_product_title">{item.name}</p>
                <p className="checkout_product_price">
                  <strong>
                    {item?.price?.formatted_with_symbol} * {item?.quantity} ={" "}
                    {cart?.currency.symbol}
                    {item?.price.raw * item?.quantity}
                  </strong>
                </p>
                <button onClick={() => RemoveFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout_right">
        <div className="subtotal">
          <p>
            Subtotal ({cart?.total_items}):{" "}
            <strong>{cart?.subtotal.formatted_with_symbol}</strong>
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This order conatin a gift
          </small>
        </div>
        <button className="checkout_rightBtn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
