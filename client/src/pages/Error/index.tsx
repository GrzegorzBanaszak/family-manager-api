import { BiErrorCircle } from "react-icons/bi";
import { ErrorContainer, ErrorLink, ErrorMessage } from "./error.components";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <BiErrorCircle fontSize={40} /> Nie znaleziono strony
      </ErrorMessage>
      <ErrorLink to="/">Powrót do strony głownej</ErrorLink>
    </ErrorContainer>
  );
};

export default Error;
