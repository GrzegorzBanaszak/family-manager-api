import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

export const List = styled.ul`
  margin: 1rem;
  list-style-type: none;
`;

export const ListElement = styled.li`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #3f51b5;
    color: #fff;
  }
`;
