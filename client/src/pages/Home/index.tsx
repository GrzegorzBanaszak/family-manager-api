import {
  HomeContainer,
  HomeContent,
  HomeDescription,
  HomeLink,
  HomeLinksContainer,
  HomeList,
  HomeTitle,
} from "./home.components";
import {
  AiFillPlusCircle,
  AiOutlineUserAdd,
  AiOutlineLogin,
} from "react-icons/ai";
import { SiHomeassistant } from "react-icons/si";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitle>
          <SiHomeassistant /> Fundusze rodzinne
        </HomeTitle>
        <HomeDescription>
          Z naszą aplikacją zarządzanie funduszami rodzinnymi bedzię łatwe i
          przyjemne.
          <br /> Aplikacja umożliwia:
        </HomeDescription>
        <HomeList>
          <li>
            <AiFillPlusCircle color="#388e3c" /> Dodawanie wydatków
          </li>
          <li>
            <AiFillPlusCircle color="#388e3c" /> Sprawdzanie histori wydatków
          </li>
          <li>
            <AiFillPlusCircle color="#388e3c" />
            Proste dodawanie członków rodziny
          </li>
        </HomeList>
        <HomeLinksContainer>
          <HomeLink type="register" to="/register">
            <AiOutlineUserAdd fontSize={20} /> Zarejstruj sie
          </HomeLink>
          <HomeLink type="login" to="/login">
            <AiOutlineLogin fontSize={20} /> Zaloguj się
          </HomeLink>
        </HomeLinksContainer>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
