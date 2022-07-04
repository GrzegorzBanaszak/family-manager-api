import styled from "styled-components";
import { devices } from "../../devicesBreakpoints";

export const Header = styled.header`
  gap: 1rem;
  @media ${devices.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const HeaderRight = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  p {
    padding: 0 1rem;
  }
  @media ${devices.laptop} {
    margin-top: 0;
  }
`;

type HeaderControlProps = {
  isActive: boolean;
};

export const HeaderControl = styled.div<HeaderControlProps>`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  background-color: ${(props) => (props.isActive ? "#1a237e" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  cursor: pointer;
  @media ${devices.laptop} {
    font-size: 1.2rem;
  }
`;

export const HeaderMoney = styled.div`
  border: 1px solid #1a237e;
  border-radius: 10px 0 0 10px;
  padding: 0.5rem 1rem;
`;
export const HeaderAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background-color: #1a237e;
  color: white;
  border: 1px solid #1a237e;
  border-radius: 0 8px 8px 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
