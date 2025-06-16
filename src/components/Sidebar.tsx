import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import classNames from "classnames";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const { theme } = useTheme();

  const anchorClass = classNames({
    "sidebar-link": true,
    dark: theme === "dark",
  });

  return (
    <aside
      style={{
        width: "200px",
        padding: "1rem",
        backgroundColor: theme === "light" ? "#e5e7eb" : "#1f2937",
        color: theme === "light" ? "#111827" : "#f9fafb",
        height: "108.7vh",
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
          <li className={anchorClass}>
            <Link to="/products">Products</Link>
          </li>
          <li className={anchorClass}>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
