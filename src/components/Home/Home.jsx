// Home.js
import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";

const Home = () => {
  const categories = useContext(CategoryContext);

  return (
    <div className="home-container">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="no-text-decoration"
        >
          <h3 className="card">{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Home;
