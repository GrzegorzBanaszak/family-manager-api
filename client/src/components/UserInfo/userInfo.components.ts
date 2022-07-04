import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

export const InfoElement = styled.div`
  font-size: 1.6rem;
  margin: 1rem 3rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;
export const InfoNav = styled.div`
  padding: 0.7rem 2rem;
  margin: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
