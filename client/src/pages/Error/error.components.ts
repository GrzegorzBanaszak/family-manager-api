import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const ErrorLink = styled(Link)`
  margin-top: 1.5rem;
  background-color: #f44336;
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 15px;
  text-decoration: none;
`;
