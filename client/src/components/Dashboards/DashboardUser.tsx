import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Header,
  HeaderAdd,
  HeaderControl,
  HeaderLeft,
  HeaderMoney,
  HeaderRight,
} from "./dashboards.components";
import { getFamily } from "../../features/family/familySlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { setDashboardUserLocation } from "../../features/dashboard/dashboardSlice";
import Transactions from "../Transactions";
import FamilyMembers from "../FamilyMembers";
import AddTransaction from "../AddTransaction";
import UserInfo from "../UserInfo";
const DashboardUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { family } = useAppSelector((state) => state.family);
  const { dashboardUserLocation } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && !family) {
      dispatch(getFamily());
    }
  }, [user]);

  const display = (): JSX.Element => {
    switch (dashboardUserLocation) {
      case "transactions":
        return <Transactions />;
      case "familyMembers":
        return <FamilyMembers />;
      case "addTransaction":
        return <AddTransaction />;
      case "userInfo":
        return <UserInfo />;
      default:
        return <Transactions />;
    }
  };
  return (
    <>
      <Header>
        <HeaderLeft>
          <HeaderControl
            onClick={() => dispatch(setDashboardUserLocation("transactions"))}
            isActive={dashboardUserLocation === "transactions"}
          >
            Transakcje
          </HeaderControl>
          <HeaderControl
            onClick={() => dispatch(setDashboardUserLocation("familyMembers"))}
            isActive={dashboardUserLocation === "familyMembers"}
          >
            Członkowie rodziny
          </HeaderControl>
        </HeaderLeft>
        <HeaderRight>
          <HeaderMoney>{family?.cash} zł</HeaderMoney>
          <HeaderAdd
            onClick={() => dispatch(setDashboardUserLocation("addTransaction"))}
          >
            <IoMdAddCircleOutline /> Dodaj transakcje
          </HeaderAdd>
        </HeaderRight>
      </Header>
      {display()}
    </>
  );
};

export default DashboardUser;
