import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./pages/login/Login";
import GlobalStyle from "./styles/StyleGlobal";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/header";
import { useAuth } from "./context/AuthContext/useAuth";
import BaseLayout from "./components/baseLayout/Base";
import Dashboard from "./pages/dashbord/Dashboard";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, themeMain } from "./styles/theme";
const themes = [themeMain, lightTheme, darkTheme];
const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const shouldShowHeader = isAuthenticated && location.pathname !== "/";
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const currentTheme = themes[currentThemeIndex];

  const toggleTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {shouldShowHeader && <Header toggleTheme={toggleTheme} />}
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<BaseLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
