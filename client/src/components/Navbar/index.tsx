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
import { familyLogoutReset } from "../../features/family/familySlice";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(familyLogoutReset());
    dispatch(logout());
  };

  return (
    <NavbarContainer>
      <NavbarElementLeft>
        <SiHomeassistant fontSize={30} /> Fundusze rodzinne
      </NavbarElementLeft>
      <NavbarElementRight>
        <NavbarUser>
          <AiOutlineUser fontSize={24} /> {user?.firstName} {user?.lastName}
        </NavbarUser>
        <NavbarLogout onClick={handleLogout}>
          <BiLogOut fontSize={24} />
        </NavbarLogout>
      </NavbarElementRight>
    </NavbarContainer>
  );
};

export default Navbar;
