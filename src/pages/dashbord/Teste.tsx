import ContainerPersonalized from "../../components/divContainer/ContainerPersonalized";
import { useAuth } from "../../context/AuthContext/useAuth";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";

const Teste = () => {
  const { logout } = useAuth();
  const { isMobile } = useResponsive();
  return (
    <ContainerPersonalized tagSemantica="section">
      {!isMobile && (
        <span className="logo">
          <h2>Arnia Trello</h2>
        </span>
      )}
      <h2>Teste</h2>
      <button onClick={logout}>Logout</button>
    </ContainerPersonalized>
  );
};

export default Teste;
