import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { useTheme } from "../context/ThemeContext";

const ProductListPage = React.lazy(
  () => import("products_remote_mfe/ProductListPage")
);
const OrderListPage = React.lazy(
  () => import("orders_remote_mfe/OrderListPage")
);

const AppRoutes: React.FC = () => {
  const { theme } = useTheme();
  const routeClass = theme === "dark" ? "dark-route" : "route";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/products"
          element={
            <ErrorBoundary
              fallback={<div>Failed to load Products module.</div>}
            >
              <Suspense fallback={<div>Loading Products...</div>}>
                <ProductListPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/orders"
          element={
            <ErrorBoundary fallback={<div>Failed to load Orders module.</div>}>
              <Suspense fallback={<div>Loading Orders...</div>}>
                <OrderListPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <div className={routeClass}>Select a module from the sidebar.</div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
