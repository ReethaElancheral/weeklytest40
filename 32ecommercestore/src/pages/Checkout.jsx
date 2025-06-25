import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart, user } = useStore();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState(null);

  if (!user) {
    navigate("/login");
    return null;
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePayment = () => {
   
    setPaymentStatus("Processing payment...");
    setTimeout(() => {
      setPaymentStatus("Payment Successful! Thank you for your order.");
      clearCart();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  };

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-items">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} × {item.qty} = ${(item.price * item.qty).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="checkout-total">Total: ₹{totalPrice.toFixed(2)}</p>
          <button className="btn-pay" onClick={handlePayment} disabled={paymentStatus}>
            Pay Now
          </button>
          {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
        </>
      )}
    </main>
  );
};

export default Checkout;
