import { Container } from "./style";
import FormLogin from "../../components/formLogin/FormLogin";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";

const Login = () => {
  const { isMobile } = useResponsive();

  return (
    <Container
      padding={isMobile ? "0px" : "10px"}
      backgroundColor={isMobile ? "transparent" : ""}
    >
      {!isMobile && (
        <span className="logo">
          <h2>Arnia Trello</h2>
        </span>
      )}
      <FormLogin />
    </Container>
  );
};

export default Login;
