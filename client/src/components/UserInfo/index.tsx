import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setDashboardAdminLocation,
  setDashboardUserLocation,
} from "../../features/dashboard/dashboardSlice";
import { InfoElement, InfoNav, Title } from "./userInfo.components";

const UserInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { family } = useAppSelector((state) => state.family);
  const dispatch = useAppDispatch();
  if (user?.role === "admin") {
    return (
      <>
        <Title>Informacje o użytkowniku</Title>
        <InfoNav
          onClick={() => dispatch(setDashboardAdminLocation("familyList"))}
        >
          <BsFillArrowLeftCircleFill fontSize={22} /> Powrót do listy
        </InfoNav>
        <InfoElement>
          <b>Imie:</b> {user?.firstName}
        </InfoElement>
        <InfoElement>
          <b>Nazwisko:</b> {user?.lastName}
        </InfoElement>
        <InfoElement>
          <b>Email:</b> {user?.email}
        </InfoElement>
      </>
    );
  }

  return (
    <>
      <Title>Informacje o użytkowniku</Title>
      <InfoNav
        onClick={() => dispatch(setDashboardUserLocation("transactions"))}
      >
        <BsFillArrowLeftCircleFill fontSize={22} /> Powrót do listy
      </InfoNav>
      <InfoElement>
        <b>Imie:</b> {user?.firstName}
      </InfoElement>
      <InfoElement>
        <b>Nazwisko:</b> {user?.lastName}
      </InfoElement>
      <InfoElement>
        <b>Email:</b> {user?.email}
      </InfoElement>
      <InfoElement>
        <b>Kod dodania człanka:</b> {family?.verificationKey}
      </InfoElement>
    </>
  );
};

export default UserInfo;
