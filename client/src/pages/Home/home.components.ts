import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../devicesBreakpoints";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/home-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  max-width: 700px;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  color: #263238;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media ${devices.laptop} {
    padding: 2rem;
  }
`;

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
  @media ${devices.laptop} {
    font-size: 2rem;
  }
`;

export const HomeDescription = styled.p`
  line-height: 1.8rem;
  @media ${devices.laptop} {
    font-size: 1.3rem;
  }
`;

export const HomeList = styled.ul`
  list-style-type: none;
  margin: 0.5rem 0;
  li {
    padding: 0.4rem 0;
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  @media ${devices.laptop} {
    font-size: 1.3rem;
  }
`;

export const HomeLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem 0;
  padding: 0.4rem;
  gap: 1rem;
`;

type HomeLinkProps = {
  type: string;
};

export const HomeLink = styled(Link)<HomeLinkProps>`
  flex-grow: 1;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 20px;
  border: 1px solid #1b5e20;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.type === "register" ? "#1b5e20" : "white"};
  color: ${(props) => (props.type === "register" ? "white" : "#1b5e20")};
  font-size: 1.2rem;
`;
