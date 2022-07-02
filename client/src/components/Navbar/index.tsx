import { useAppSelector } from "../../app/hooks";
import {
  NavbarContainer,
  NavbarElementRight,
  NavbarMoney,
  NavbarElementLeft,
  NavbarLogout,
} from "./navbar.components";
import { AiOutlineUser } from "react-icons/ai";
import { TbReportMoney } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <NavbarContainer>
      <NavbarElementRight>
        <AiOutlineUser fontSize={24} /> {user?.firstName} {user?.lastName}
      </NavbarElementRight>
      <NavbarElementLeft>
        <NavbarMoney>
          <TbReportMoney fontSize={24} /> 1000 zł
        </NavbarMoney>
        <NavbarLogout>
          <BiLogOut fontSize={24} />
        </NavbarLogout>
      </NavbarElementLeft>
    </NavbarContainer>
  );
};

export default Navbar;
