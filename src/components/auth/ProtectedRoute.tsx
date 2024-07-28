import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/useAuth";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";
import Modal from "../modal";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <ContainerPersonalized tagSemantica="section">
        <Modal>
          <h3
            style={{
              color: "black",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "1.2em",
              lineHeight: "1.1",
              textAlign: "center",
              padding: "1px",
            }}
          >
            loading...
          </h3>
        </Modal>
      </ContainerPersonalized>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
