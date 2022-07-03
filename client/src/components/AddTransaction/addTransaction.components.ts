import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
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
