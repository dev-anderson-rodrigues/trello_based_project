// import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext/useAuth";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";
import { Ul } from "./styles";
import ToggleButton from "../toogleTheme";
import { useTheme } from "styled-components";
import Avatar from "@mui/material/Avatar";

type propHeader = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: propHeader) => {
  const { user, logout } = useAuth();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>();
  const theme = useTheme();

  // const initialsName = user?.name ? user.name.charAt(0).toUpperCase() : "";

  // const { isTablet, isDesktop } = useResponsive();
  return (
    <ContainerPersonalized
      tagSemantica="header"
      style={{
        width: "100vw",
        height: "6.0vh",
        backgroundColor: theme.colors.background.secondary,
        borderBottom: "1px solid black",
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
            color: theme.colors.text_color.primary,
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
            backgroundColor: theme.colors.text_color.primary,
            borderRadius: "70%",
            padding: "5px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => {
            setIsOpenDropdown(() => !isOpenDropdown);
            // handleLogout();
          }}
        >
          <Avatar
            alt="Remy Sharp"
            sx={{
              bgcolor: theme.colors.background.primary,
              color: theme.colors.text_color.secondary,
            }}
          />
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
          <h4
            style={{
              fontSize: "1.4em",
              color: theme.colors.text_color.primary,
              fontWeight: "700",
            }}
          >
            {user?.name}
          </h4>
        </span>
        {isOpenDropdown && (
          <span
            style={{
              fontSize: "1.4em",
              position: "absolute",
              top: "50px",
              right: "-0px",
              backgroundColor: theme.colors.background.primary,
              color: theme.colors.text_color.secondary,
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
                    <ToggleButton text="Perfil" />
                  </li>
                  <li>
                    <ToggleButton text="Configurações" />
                  </li>
                  <li>
                    <ToggleButton text="Ajuda" />
                  </li>
                </Ul>
                <Ul
                  style={{
                    gap: "10px",
                  }}
                >
                  <li>
                    <ToggleButton onClick={toggleTheme} text="Mudar tema" />
                  </li>
                  <li>
                    <ToggleButton onClick={logout} text="Sair" />
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
