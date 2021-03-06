import React from 'react';
import CartSummaryItem from './cart-summary-item';
import CalculateTotal from './calculate-total';

function CartSummary(props) {

  function handleClick() {
    props.setView('catalog', {});
  }

  function handleCheckout() {
    props.setView('checkout', {});
  }

  function CheckoutBtn() {
    if (props.cart.length) {
      return (
        <div className="text-right col-6 checkout-btn-container p-0">
          <button
            className="checkout-btn btn btn-primary"
            onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      );
    }
  }

  return (
    <div className="container cart-summary-container pb-3">
      <div className="container">
        <button
          className="btn btn-light back-button mt-3 mb-3"
          onClick={handleClick}>
          &lt; Back to catalog
        </button>
        <h2 className="cart-h2">My Cart</h2>
      </div>
      <div className="container">
        {
          props.cart.length
            ? props.cart.map((item, index) => <CartSummaryItem key={index} item={item} deleteFromCart={props.deleteFromCart}/>)
            : <h3>No items in cart</h3>
        }
      </div>
      <div className="container">
        <div className="row cart-total justify-content-between align-items-center checkout-footer">
          <h3 className="col-6 p-0 m-0">Item Total: {CalculateTotal(props.cart)}</h3>
          {CheckoutBtn()}
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
