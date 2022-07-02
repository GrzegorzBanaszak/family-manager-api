import { useState } from "react";
import { RegisterData } from "../../types";
import {
  RegisterContainer,
  RegisterContent,
  RegisterFamilyBox,
  RegisterFamilyBtn,
  RegisterFamilyCheck,
  RegisterForm,
  RegisterFormGroupe,
  RegisterLink,
  RegisterSubmit,
  RegisterTitle,
} from "./register.components";
import { AiFillCheckSquare, AiOutlineUserAdd } from "react-icons/ai";

const defaultState: RegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  memberOfFamily: "",
  role: "user",
};

const Register = () => {
  const [formData, setFormData] = useState<RegisterData>(defaultState);
  const [hasFamily, setHasFamily] = useState<boolean>(false);

  const onChande = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterTitle>
          <AiOutlineUserAdd /> Rejestracja
        </RegisterTitle>
        <RegisterForm>
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
              type="confirmPassword"
              id="confirmPassword"
              placeholder="Potwierdź hasło"
              name="confirmPassword"
              onChange={onChande}
            />
          </RegisterFormGroupe>
          <RegisterFamilyCheck onClick={() => setHasFamily((prev) => !prev)}>
            <AiFillCheckSquare
              fontSize={22}
              color={hasFamily ? "#388e3c" : "#bdbdbd"}
            />
            Chce dołączyć do istniejącej rodziny
          </RegisterFamilyCheck>
          {hasFamily && (
            <>
              <RegisterFamilyBox>
                <input placeholder="Klucz weryfikacji rodziny" />
              </RegisterFamilyBox>
              <RegisterFamilyBox>
                <RegisterFamilyBtn>Sprawdz</RegisterFamilyBtn>
              </RegisterFamilyBox>
            </>
          )}
          <RegisterLink to="/login">Zaloguj</RegisterLink>
          <RegisterSubmit>Zarejestruj</RegisterSubmit>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default Register;
