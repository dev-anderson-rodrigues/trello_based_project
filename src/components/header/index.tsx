// import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext/useAuth";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";
import { Button, Ul } from "./styles";

const Header = () => {
  const { user, logout } = useAuth();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>();

  const initialsName = user?.name ? user.name.charAt(0).toUpperCase() : "";

  // const { isTablet, isDesktop } = useResponsive();
  return (
    <ContainerPersonalized
      tagSemantica="header"
      style={{
        width: "100vw",
        height: "6vh",
        backgroundColor: "#1a1033",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <span className="logo" style={{ width: "100%" }}>
        <h2
          style={{
            margin: "auto",
            padding: "2px",
            textAlign: "start",
            fontSize: "1.4em",
            color: "#ffff",
            marginLeft: "20px",
          }}
        >
          Arnia Trello
        </h2>
      </span>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
          color: "black",
          margin: "auto",
          position: "relative",
        }}
      >
        <span
          style={{
            backgroundColor: "#191970",
            borderRadius: "70%",
            padding: "5px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            border: "1px solid #535bf2",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => {
            setIsOpenDropdown(() => !isOpenDropdown);
            // handleLogout();
          }}
        >
          <h4
            style={{
              fontSize: "1.5em",
              color: "white",
              transition: "color 0.3s easeInOut",
              fontWeight: "bold",
            }}
          >
            {initialsName}
          </h4>
        </span>
        <span
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <h4 style={{ fontSize: "1.4em", color: "#ffff" }}>{user?.name}</h4>
        </span>
        {isOpenDropdown && (
          <span
            style={{
              fontSize: "1.4em",
              position: "absolute",
              top: "40px",
              right: "-0px",
              backgroundColor: "#26243f",
              color: "#ffffff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              zIndex: "100",
              flexDirection: "column",
              width: "300px",
              height: "300px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <nav>
              <ul style={{ listStyle: "none" }}>
                <Ul
                  style={{
                    flexDirection: "column",
                    gap: "22px",
                    paddingBottom: "22px",
                    boxSizing: "border-box",
                  }}
                >
                  <li>
                    <Button>Perfil</Button>
                  </li>
                  <li>
                    <Button>Configurações</Button>
                  </li>
                  <li>
                    <Button>Ajuda</Button>
                  </li>
                </Ul>
                <Ul
                  style={{
                    gap: "10px",
                  }}
                >
                  <li>
                    <Button>Mudar tema</Button>
                  </li>
                  <li>
                    <Button onClick={logout}>Sair</Button>
                  </li>
                </Ul>
              </ul>
            </nav>
          </span>
        )}
      </div>
      {/* <MenuMobile /> */}
      {/* {isTablet && <Menu />} */}
      {/* {isDesktop && <MenuDesktop />} */}
    </ContainerPersonalized>
  );
};

export default Header;
