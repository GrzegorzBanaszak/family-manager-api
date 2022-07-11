import styled from "styled-components";
import { devices } from "../../devicesBreakpoints";
import { Link } from "react-router-dom";
export const RegisterContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("./home-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterContent = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  color: #263238;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media ${devices.laptop} {
    padding: 2rem;
  }
`;
export const RegisterTitle = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.3rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
  @media ${devices.laptop} {
    font-size: 2rem;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  input {
    border: 1px solid #e0e0e0;
    padding: 0.7rem 0.3rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    outline: none;
  }
`;

export const RegisterFormGroupe = styled.div`
  display: flex;
  flex-direction: column;
  input {
    flex-grow: 1;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    gap: 0.7rem;
  }
`;

export const RegisterFamilyCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  margin-bottom: 0.7rem;
`;

export const RegisterFamilyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  input {
    flex-grow: 1;
  }
`;

export const RegisterFamilyName = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
`;
export const RegisterFamilyError = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #ff5722;
`;

export const RegisterFamilyBtn = styled.div`
  background-color: #33691e;
  color: white;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #757575;
  margin: 1rem 0;
`;

export const RegisterSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 20px;
  border: 1px solid #1b5e20;
  text-transform: uppercase;
  background-color: #1b5e20;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const RegisterError = styled.div`
  text-align: center;
  font-weight: bold;
  margin: 0.6rem 0;
  color: #ff5722;
`;
