import { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LoginData } from "../../types";
import { login, reset } from "../../features/auth/authSlice";
import {
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginError,
  LoginForm,
  LoginLink,
  LoginTitle,
} from "./login.components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { isError, isSuccess, isLoading, message } = useAppSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      nav("/dashbord");
    }
  }, [isSuccess]);

  const onChande = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>
          <AiOutlineLogin />
          Zaloguj
        </LoginTitle>
        <LoginForm autoComplete="off" onSubmit={formSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={onChande}
          />
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            placeholder="Hasło"
            name="password"
            onChange={onChande}
          />
          {isError && <LoginError>{message}</LoginError>}
          <LoginLink to="/register">Zarejstruj sie</LoginLink>
          <LoginButton type="submit">Zaloguj</LoginButton>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
