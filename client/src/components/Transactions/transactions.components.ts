import styled from "styled-components";
import { devices } from "../../devicesBreakpoints";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

export const TransactionsList = styled.ul`
  margin: 1rem;
  list-style-type: none;
`;

export const Transaction = styled.li`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  font-size: 1.2rem;
  margin: 1rem 0;
  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);
    div {
      text-align: center;
    }
  }
`;

export const TransactionInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.6rem;
`;
