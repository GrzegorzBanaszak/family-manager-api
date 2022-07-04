import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { List, ListElement, Title } from "./familyList.components";
import moment from "moment";
import "moment/locale/pl";
import { setDashboardAdminLocation } from "../../features/dashboard/dashboardSlice";
import { setFamily, resetFamily } from "../../features/family/familySlice";
import { useEffect } from "react";
const FamilyList = () => {
  const { families, family } = useAppSelector((state) => state.family);
  const { dashboardAdminLocation } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dashboardAdminLocation === "familyList" && family) {
      dispatch(resetFamily());
    }
  }, [dashboardAdminLocation]);

  const getData = (date: Date): string => {
    moment.locale("pl");
    return moment(date).format("LL");
  };

  const displayFamilyInfo = (id: string) => {
    dispatch(setFamily(id));
    dispatch(setDashboardAdminLocation("familyInfo"));
  };

  return (
    <>
      <Title>Lista Rodzin</Title>
      <List>
        {families &&
          families.map(({ _id, name, familyMembers, cash, createdAt }) => (
            <ListElement key={_id} onClick={() => displayFamilyInfo(_id)}>
              <div>{name.toUpperCase()}</div>
              <div>Z nami od: {getData(createdAt)}</div>
              <div>Ilość członków rodziny {familyMembers.length}</div>
              <div>Saldo: {cash} zł</div>
            </ListElement>
          ))}
      </List>
    </>
  );
};

export default FamilyList;
