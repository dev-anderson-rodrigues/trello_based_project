import ContainerPersonalized from "../../components/divContainer/ContainerPersonalized";
import Header from "../../components/header";
import { useAuth } from "../../context/AuthContext/useAuth";

const Teste = () => {
  const { logout } = useAuth();

  return (
    <ContainerPersonalized
      tagSemantica="section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />

      <h2>Teste</h2>
      <button onClick={logout}>Logout</button>
    </ContainerPersonalized>
  );
};

export default Teste;
