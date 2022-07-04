import styled from "styled-components";
import { devices } from "../../devicesBreakpoints";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.5rem;
  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavigationItem = styled.div`
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #303f9f;
  color: white;
  text-transform: uppercase;
  border-radius: 15px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #3949ab;
  }
`;

export const TransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
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

export const FormFildes = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.laptop} {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const FormGroupe = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionError = styled.div`
  text-align: center;
  font-weight: bold;
  margin: 0.6rem 0;
  color: #ff5722;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 0.5rem;
  padding: 0.7rem 3rem;
  border-radius: 20px;
  text-transform: uppercase;
  background-color: #1a237e;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoUsers = styled.div`
  margin: 0 0.6rem;
`;

export const InfoUsersItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;
export const InfoUsersTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;
export const InfoTransactions = styled.div`
  margin: 0 0.6rem;
`;

export const InfoTransactionsTitle = styled.h3`
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

export const InfoTransactionsItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;
