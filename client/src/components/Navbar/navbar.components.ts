import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a237e;
  color: white;
  padding: 1rem;
`;

export const NavbarElementRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const NavbarElementLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavbarMoney = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
export const NavbarLogout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a237e;
  background-color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;
