import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResponsiveProvider } from "./context/ResponsiveContext/responsiveContext.tsx";
import { AuthProvider } from "./context/AuthContext/authContext";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResponsiveProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  </React.StrictMode>
);
