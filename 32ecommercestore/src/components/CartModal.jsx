import React from "react";
import { useStore } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, clearCart, user } = useStore();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    onClose();
    if (user) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="cart-modal-backdrop" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      Qty: {item.qty} × ₹{item.price}
                    </p>
                  </div>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: ₹{totalPrice.toFixed(2)}</p>
            <button className="btn-clear" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="btn-checkout" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
