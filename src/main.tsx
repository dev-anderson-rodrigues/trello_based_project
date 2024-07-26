import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResponsiveProvider } from "./context/ResponsiveContext/responsiveContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResponsiveProvider>
      <App />
    </ResponsiveProvider>
  </React.StrictMode>
);
