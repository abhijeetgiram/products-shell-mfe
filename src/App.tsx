import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/Routes";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css"; // Import global styles

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ padding: "1rem", flex: 1 }}>
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
