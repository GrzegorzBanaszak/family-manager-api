import styled from "styled-components";
import { devices } from "../../devicesBreakpoints";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #1a237e;
  margin-right: 1rem;
  border-radius: 10px;
  font-size: 1.1rem;
  p {
    padding: 0 1rem;
  }
`;

type HeaderControlProps = {
  isActive: boolean;
};

export const HeaderControl = styled.div<HeaderControlProps>`
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: ${(props) => (props.isActive ? "#1a237e" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  cursor: pointer;
`;

export const HeaderAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background-color: #1a237e;
  color: white;
  border-radius: 0 8px 8px 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
