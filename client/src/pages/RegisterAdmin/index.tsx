import { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  registerAdmin,
  reset,
  setFormError,
} from "../../features/auth/authSlice";
import { RegisterAdminData } from "../../types";
import {
  RegisterContainer,
  RegisterContent,
  RegisterError,
  RegisterForm,
  RegisterFormGroupe,
  RegisterLink,
  RegisterSubmit,
  RegisterTitle,
} from "./registerAdmin.components";

const defaultState: RegisterAdminData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "admin",
};

const RegisterAdmin = () => {
  const [formData, setFormData] = useState<RegisterAdminData>(defaultState);
  const { isError, isSuccess, message } = useAppSelector((state) => state.auth);
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      nav("/dashboard/admin");
    }
  }, [isSuccess]);

  const onChande = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(registerAdmin(formData));
    } else {
      dispatch(setFormError("Hasła nie są identyczne"));
    }
  };
  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterTitle>
          <AiOutlineUserAdd /> Rejestracja administratora
        </RegisterTitle>
        <RegisterForm onSubmit={onSubmit}>
          <label>Imie i nazwisko</label>
          <RegisterFormGroupe>
            <input
              type="firstName"
              id="firstName"
              placeholder="Imię"
              name="firstName"
              onChange={onChande}
            />
            <input
              type="lastName"
              id="lastName"
              placeholder="Nazwisko"
              name="lastName"
              onChange={onChande}
            />
          </RegisterFormGroupe>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={onChande}
          />
          <label>Hasło</label>
          <RegisterFormGroupe>
            <input
              type="password"
              id="password"
              placeholder="Hasło"
              name="password"
              onChange={onChande}
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Potwierdź hasło"
              name="confirmPassword"
              onChange={onChande}
            />
          </RegisterFormGroupe>

          {isError && <RegisterError>{message}</RegisterError>}
          <RegisterLink to="/login">Zaloguj</RegisterLink>
          <RegisterSubmit>Zarejestruj</RegisterSubmit>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default RegisterAdmin;
