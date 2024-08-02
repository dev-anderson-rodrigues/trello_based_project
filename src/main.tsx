import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResponsiveProvider } from "./context/ResponsiveContext/responsiveContext.tsx";
import { AuthProvider } from "./context/AuthContext/authContext";
import { CardsProvider } from "./context/CardsContext/cardsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardsProvider>
      <ResponsiveProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ResponsiveProvider>
    </CardsProvider>
  </React.StrictMode>
);
