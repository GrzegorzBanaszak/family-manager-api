import { useEffect, useState } from "react";
import { RegisterData } from "../../types";
import {
  RegisterContainer,
  RegisterContent,
  RegisterError,
  RegisterFamilyBox,
  RegisterFamilyBtn,
  RegisterFamilyCheck,
  RegisterFamilyError,
  RegisterFamilyName,
  RegisterForm,
  RegisterFormGroupe,
  RegisterLink,
  RegisterSubmit,
  RegisterTitle,
} from "./register.components";
import { AiFillCheckSquare, AiOutlineUserAdd } from "react-icons/ai";
import {
  familyCheck,
  reset,
  setFormError,
  register,
} from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
const defaultState: RegisterData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  memberOfFamily: "",
  hasFamily: false,
  role: "user",
};

const Register = () => {
  const [formData, setFormData] = useState<RegisterData>(defaultState);
  const [verificationKey, setVerificationKey] = useState<string>("");
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const { familyVerified, familyVerifiedError, isError, isSuccess, message } =
    useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      nav("/dashboard");
    }
  }, [isSuccess]);

  const onChande = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const checkFamily = () => {
    if (verificationKey) {
      dispatch(familyCheck(verificationKey));
    }
  };

  const handleHasFamily = (e: React.MouseEvent<HTMLDivElement>) => {
    setFormData((prev) => ({ ...prev, hasFamily: !prev.hasFamily }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      if (formData.hasFamily && familyVerified) {
        dispatch(
          register({
            ...formData,
            memberOfFamily: familyVerified?.id,
          })
        );
      } else {
        dispatch(register(formData));
      }
    } else {
      dispatch(setFormError("Has??a nie s?? identyczne"));
    }
  };

  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterTitle>
          <AiOutlineUserAdd /> Rejestracja
        </RegisterTitle>
        <RegisterForm onSubmit={onSubmit}>
          <label>Imie i nazwisko</label>
          <RegisterFormGroupe>
            <input
              type="firstName"
              id="firstName"
              placeholder="Imi??"
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
          <label>Has??o</label>
          <RegisterFormGroupe>
            <input
              type="password"
              id="password"
              placeholder="Has??o"
              name="password"
              onChange={onChande}
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Potwierd?? has??o"
              name="confirmPassword"
              onChange={onChande}
            />
          </RegisterFormGroupe>
          <RegisterFamilyCheck onClick={handleHasFamily}>
            <AiFillCheckSquare
              fontSize={22}
              color={formData.hasFamily ? "#388e3c" : "#bdbdbd"}
            />
            Chce do????czy?? do istniej??cej rodziny
          </RegisterFamilyCheck>
          {formData.hasFamily && (
            <>
              <RegisterFamilyBox>
                <input
                  value={verificationKey}
                  onChange={(e) => setVerificationKey(e.target.value)}
                  placeholder="Klucz weryfikacji rodziny"
                />
              </RegisterFamilyBox>
              <RegisterFamilyBox>
                <RegisterFamilyBtn onClick={checkFamily}>
                  Sprawdz
                </RegisterFamilyBtn>
                {familyVerifiedError && (
                  <RegisterFamilyError>
                    {familyVerifiedError}
                  </RegisterFamilyError>
                )}
                {familyVerified && (
                  <RegisterFamilyName>{familyVerified.name}</RegisterFamilyName>
                )}
              </RegisterFamilyBox>
            </>
          )}
          {isError && <RegisterError>{message}</RegisterError>}
          <RegisterLink to="/login">Zaloguj</RegisterLink>
          <RegisterSubmit>Zarejestruj</RegisterSubmit>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default Register;
