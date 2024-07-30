import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { Box } from "@mui/material";
import { Form } from "./styles";
import { useResponsive } from "../../context/ResponsiveContext/useResponsive";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserType } from "../../context/AuthContext/types";
import { useAuth } from "../../context/AuthContext/useAuth";
import ContainerPersonalized from "../divContainer/ContainerPersonalized";
import {
  getDadosProfileLocalStorage,
  setDadosProfileLocalStorage,
} from "../../context/AuthContext/util";
// import ContainerPersonalized from "../divContainer/ContainerPersonalized";

const FormLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isMessage, setIsMessage] = useState<string | null>(null);
  const { login, createUser } = useAuth();
  const { isMobile, isMobileLow } = useResponsive();
  const [registration, setRegistration] = useState(false);

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<createUserType>();
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera o último e-mail logado do localStorage quando o componente é montado
    const savedCredentials = getDadosProfileLocalStorage();
    if (savedCredentials) {
      try {
        const { email, password } = savedCredentials;

        setValue("email", email);
        setValue("password", password);
      } catch (error) {
        console.error("Failed to parse saved credentials:", error);
      }
    }
  }, [setValue]);

  const handleFormSubmit = async (data: createUserType) => {
    if (registration) {
      try {
        const response = await createUser(data);
        console.log(response);
        if (response!.status === 201) {
          setIsMessage(() => "Usuário criado com sucesso!");
          setTimeout(() => {
            setIsMessage("");
            reset(); // Reset the form values
            navigate("/dashboard");
          }, 1500);
        }
        return response;
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message);
        setIsMessage(() => null);
      }
    } else {
      const credentials = { email: data.email, password: data.password };
      setDadosProfileLocalStorage(credentials);

      try {
        const response = await login({
          email: data.email,
          password: data.password,
        });

        navigate("/dashboard");
        return response;
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message);
      }
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
      <Form
        onSubmit={handleSubmit(
          // Evita o envio automático do formulário
          handleFormSubmit
        )}
      >
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
          autoComplete={registration ? "new-email" : "current-email"}
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
          autoComplete={registration ? "new-password" : "current-password"}
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
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
            //   message:
            //     "A senha deve conter uma letra maiúscula, uma minúscula, um número, um caractere especial válido e não pode ter menos de 6 caracteres. {@.$!%*?&}",
            // },
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
        <button type="submit">
          {isSubmitting ? "Loading..." : registration ? "Cadastrar" : "Entrar"}
        </button>
        {errorMessage && (
          <ContainerPersonalized
            tagSemantica="section"
            style={{
              maxWidth: "90%",
              color: "#d32f2f",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            {errorMessage}
          </ContainerPersonalized>
        )}

        {isMessage && (
          <ContainerPersonalized
            tagSemantica="section"
            style={{
              maxWidth: "90%",
              color: "#d32f2f",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            {isMessage}
          </ContainerPersonalized>
        )}

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
                reset(), setRegistration(!registration);
                setErrorMessage(() => null);
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
