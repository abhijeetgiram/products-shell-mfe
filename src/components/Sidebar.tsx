import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        width: "200px",
        padding: "1rem",
        backgroundColor: "#f3f4f6",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
