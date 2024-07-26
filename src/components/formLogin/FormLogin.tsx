import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../context/AuthContext/types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/useAuth";
import Input from "../input/Input";
import { Box } from "@mui/material";
import { Form } from "./styles";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { useState } from "react";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login, registrationUser } = useAuth();
  const { isMobile } = useResponsive();
  const [registration, setRegistration] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<User>();
  const password = watch("password", "");

  const handleSubmitLogin: SubmitHandler<User> = async ({
    email,
    password,
  }) => {
    // Simulate authentication logic
    await login(email, password);
    navigate("/dashboard");
  };

  const handleSubmitRegistration: SubmitHandler<User> = async ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    await registrationUser(name!, email, password, confirmPassword!);
    setRegistration(false);
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
        // width: "500px",
        // height: registration ? "80vh" : isMobile ? "100vh" : "70vh",
        height: isMobile ? "100vh" : "auto",
        width: isMobile ? "100vw" : "auto",
        margin: isMobile ? "0px" : "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit(handleSubmitLogin || handleSubmitRegistration)}
      >
        {isMobile && (
          <span className="logo">
            <h2>Arnia Trello</h2>
          </span>
        )}
        {registration ? <h2>Cadastro</h2> : <h2>Login</h2>}
        {registration && (
          <Input
            label="Nome"
            type="text"
            autoComplete="name"
            {...register("name", { required: "Nome é obrigatório" })}
            error={!!errors.name}
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
          error={!!errors.email}
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
                "A senha deve conter uma letra maiúscula, uma minúscula, um número, um caractere especial válido e não pode ter menos de 6 caracteres",
            },
          })}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />
        {registration && (
          <Input
            label="Confirmar Senha"
            type="password"
            autoComplete="current-password"
            {...register("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              validate: (value) =>
                value === password || "As senhas não conferem",
            })}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
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
            <a href="#" onClick={() => setRegistration(!registration)}>
              Crie uma agora
            </a>
          </p>
        )}
      </Form>
    </Box>
  );
};

export default FormLogin;
