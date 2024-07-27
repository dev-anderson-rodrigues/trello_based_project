import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResponsiveProvider } from "./context/ResponsiveContext/responsiveContext.tsx";
import { AuthProvider } from "./context/AuthContext/authContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResponsiveProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ResponsiveProvider>
  </React.StrictMode>
);
