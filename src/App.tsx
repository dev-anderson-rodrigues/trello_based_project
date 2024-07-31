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

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Não mostrar o Header na página de login
  const shouldShowHeader = isAuthenticated && location.pathname !== "/";

  return (
    <>
      <GlobalStyle />
      {shouldShowHeader && <Header />}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<BaseLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
