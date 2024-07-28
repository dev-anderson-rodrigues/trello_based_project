import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Teste from "./pages/dashbord/Teste";
import Login from "./pages/login/Login";
import GlobalStyle from "./styles/StyleGlobal";
import BaseLayout from "./components/baseLayout/Base";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Teste />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
