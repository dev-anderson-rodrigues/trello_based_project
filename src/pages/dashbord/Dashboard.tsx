import ContainerPersonalized from "../../components/divContainer/ContainerPersonalized";
import Sidebar from "../../components/sidebar";

const Dashboard = () => {
  return (
    <ContainerPersonalized
      tagSemantica="section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "94vh",
      }}
    >
      <Sidebar />
    </ContainerPersonalized>
  );
};

export default Dashboard;
