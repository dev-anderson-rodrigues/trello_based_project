import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext/useAuth";
import Input from "../input/Input";
import { Box } from "@mui/material";
import { Form } from "./styles";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext/useAuth";
import { User } from "../../context/AuthContext/types";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const { login, createUser } = useAuth();
  const { isMobile, isMobileLow } = useResponsive();
  const [registration, setRegistration] = useState(false);

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<User>();
  const navigate = useNavigate();

  const handleFormSubmit = async ({
    name,
    email,
    password,
    confirmPassword,
  }: User) => {
    if (registration) {
      if (!name || !email || !password || !confirmPassword) {
        console.error("Email or password is missing");
        return {
          success: false,
          message: "Email or password is missing",
        };
      }
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
      const response = await createUser(name, email, password);
      navigate("/dashboard");
      return response;
    } else {
      if (!email || !password) {
        console.error("Email or password is missing");
        return {
          success: false,
          message: "Email or password is missing",
        };
      }
      const response = await login(email, password);

      navigate("/dashboard");
      return response;
    }
  };

  return (
    <Box
      component="section"
      sx={{
        zIndex: "1000",
        padding: "2rem",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        height: isMobile ? "100vh" : "auto",
        width: isMobile ? "100vw" : "500px",
        margin: isMobile ? "0px" : "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        {isMobile && (
          <span
            className="logo"
            style={{ top: isMobileLow && errors.password ? "5px" : "90px" }}
          >
            <h2>Arnia Trello</h2>
          </span>
        )}
        {registration ? <h2>Cadastro</h2> : <h2>Login</h2>}
        {registration && (
          <Input
            label="Nome"
            type="text"
            autoComplete="name"
            {...register("name", {
              required: "Nome é obrigatório",
              maxLength: {
                value: 50,
                message: "O nome não pode ter mais de 50 caracteres",
              },
              minLength: {
                value: 5,
                message: "O nome deve ter pelo menos 5 caracteres",
              },
            })}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
        )}
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email inválido",
            },
          })}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password", {
            required: "Senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres",
            },
            maxLength: {
              value: 30,
              message: "A senha não pode ter mais de 30 caracteres",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
              message:
                "A senha deve conter uma letra maiúscula, uma minúscula, um número, um caractere especial válido e não pode ter menos de 6 caracteres. {@$!%*?&}",
            },
          })}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />
        {registration && (
          <Input
            label="Confirmar Senha"
            type="password"
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              validate: (value) =>
                value === getValues("password") || "As senhas não conferem",
            })}
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
          />
        )}
        <button type="submit" disabled={isSubmitting && !isValid}>
          {isSubmitting ? "Loading..." : registration ? "Cadastrar" : "Entrar"}
        </button>

        {registration ? (
          <p
            className="container_link"
            style={{
              width: isMobile ? "95vw" : "400px",
            }}
          >
            Já possui uma conta? <span></span>
            <a href="#" onClick={() => setRegistration(!registration)}>
              Entre agora
            </a>
          </p>
        ) : (
          <p className="container_link">
            Não possui uma conta? <span></span>
            <a
              href="#"
              onClick={() => {
                setRegistration(!registration), reset();
              }}
            >
              Crie uma agora
            </a>
          </p>
        )}
      </Form>
    </Box>
  );
};

export default FormLogin;
