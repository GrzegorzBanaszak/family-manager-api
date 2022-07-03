import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Header,
  HeaderAdd,
  HeaderControl,
  HeaderLeft,
  HeaderRight,
} from "./dashboards.components";
import { getFamily } from "../../features/family/familySlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import Transactions from "../Transactions";
import FamilyMembers from "../FamilyMembers";
import AddTransaction from "../AddTransaction";
const DashboardUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { family } = useAppSelector((state) => state.family);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<string>("transactions");

  useEffect(() => {
    if (user && !family) {
      dispatch(getFamily());
    }
  }, [user]);

  const display = (): JSX.Element => {
    switch (selected) {
      case "transactions":
        return <Transactions />;
      case "familyMembers":
        return <FamilyMembers />;
      case "addTransaction":
        return <AddTransaction />;
      default:
        return <Transactions />;
    }
  };
  return (
    <>
      <Header>
        <HeaderLeft>
          <HeaderControl
            onClick={() => setSelected("transactions")}
            isActive={selected === "transactions"}
          >
            Transakcje
          </HeaderControl>
          <HeaderControl
            onClick={() => setSelected("familyMembers")}
            isActive={selected === "familyMembers"}
          >
            Członkowie rodziny
          </HeaderControl>
        </HeaderLeft>
        <HeaderRight>
          <p>{family?.cash} zł</p>
          <HeaderAdd onClick={() => setSelected("addTransaction")}>
            <IoMdAddCircleOutline /> Dodaj transakcje
          </HeaderAdd>
        </HeaderRight>
      </Header>
      {display()}
    </>
  );
};

export default DashboardUser;
