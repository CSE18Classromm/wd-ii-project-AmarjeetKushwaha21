import React from "react";

const Navbar = () => {
  return (
    <>
      {/* TOP NAVBAR */}

      <nav className="navbar">

        {/* LOGO */}

        <div className="nav-logo">
          <h1>amazon</h1>
        </div>

        {/* LOCATION */}

        <div className="nav-location">
          <p>Delivering to Ghaziabad 201009</p>
          <h4>📍 Update location</h4>
        </div>

        {/* SEARCH */}

        <div className="nav-search">

          <select>
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
          />

          <button>🔍</button>

        </div>

        {/* LANGUAGE */}

        <div className="nav-language">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="india"
          />

          <p>EN ▼</p>
        </div>

        {/* ACCOUNT */}

        <div className="nav-account">
          <p>Hello, sign in</p>
          <h4>Account & Lists ▼</h4>
        </div>

        {/* ORDERS */}

        <div className="nav-orders">
          <p>Returns</p>
          <h4>& Orders</h4>
        </div>

        {/* CART */}

        <div className="nav-cart">
          <h2>🛒</h2>
          <h4>Cart</h4>
        </div>

      </nav>

      {/* BOTTOM NAVBAR */}

      <div className="nav-bottom">

        <p>☰ All</p>
        <p>Fresh</p>
        <p>MX Player</p>
        <p>Sell</p>
        <p>Bestsellers</p>
        <p>Today's Deals</p>
        <p>Mobiles</p>
        <p>Prime</p>
        <p>New Releases</p>
        <p>Customer Service</p>
        <p>Fashion</p>
        <p>Electronics</p>

      </div>
    </>
  );
};

export default Navbar;