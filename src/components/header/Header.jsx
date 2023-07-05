import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/category">Category</a>
        </li>
        <li>
          <a href="/checkout">Cart</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
