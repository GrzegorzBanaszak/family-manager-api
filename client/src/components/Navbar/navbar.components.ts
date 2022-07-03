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
  border: 1px solid white;
  border-radius: 0.5rem;
`;

export const NavbarElementLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
`;

export const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;
`;

export const NavbarLogout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a237e;
  background-color: white;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 0 0.3rem 0.3rem 0;
`;
