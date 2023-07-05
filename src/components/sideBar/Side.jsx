import React from "react";
import "./Side.css";

const Side = () => {
  return (
    <div className="sidebar-container">
      <aside className="sidebar">
        <ul>
          <li>
            <a href="/category1">Category 1</a>
          </li>
          <li>
            <a href="/category2">Category 2</a>
          </li>
          <li>
            <a href="/category3">Category 3</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Side;
