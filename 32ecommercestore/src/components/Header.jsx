import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const Header = () => {
  const { cart, user, logout } = useStore();
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            E-Store
          </Link>
        </div>
        <div className="header-right">
          <nav>
            {user ? (
              <>
                <span className="user-greet">Hi, {user}</span>
                <button className="btn-logout" onClick={handleLogout}>
                  Logout
                </button>
                <button
                  className="btn-cart"
                  onClick={() => setShowCart(!showCart)}
                >
                  Cart ({cart.reduce((acc, item) => acc + item.qty, 0)})
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-login">
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
};

export default Header;



import CartModal from "./CartModal";
