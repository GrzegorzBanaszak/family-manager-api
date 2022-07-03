import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  NavbarContainer,
  NavbarElementRight,
  NavbarElementLeft,
  NavbarLogout,
  NavbarUser,
} from "./navbar.components";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../../features/auth/authSlice";
import { SiHomeassistant } from "react-icons/si";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <NavbarContainer>
      <NavbarElementLeft>
        <SiHomeassistant fontSize={30} /> Fundusze rodzinne
      </NavbarElementLeft>
      <NavbarElementRight>
        <NavbarUser>
          <AiOutlineUser fontSize={24} /> {user?.firstName} {user?.lastName}
        </NavbarUser>
        <NavbarLogout onClick={() => dispatch(logout())}>
          <BiLogOut fontSize={24} />
        </NavbarLogout>
      </NavbarElementRight>
    </NavbarContainer>
  );
};

export default Navbar;
