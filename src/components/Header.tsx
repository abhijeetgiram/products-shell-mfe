import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: theme === "light" ? "#e5e7eb" : "#1f2937",
        color: theme === "light" ? "#111827" : "#f9fafb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Modular Dashboard</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
};

export default Header;
