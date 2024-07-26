import { useAuth } from "../context/AuthContext/useAuth";

const Teste = () => {
  const { logout } = useAuth();
  return (
    <>
      <div>
        <h2>Teste</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default Teste;
