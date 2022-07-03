import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import FamilyInfo from "../FamilyInfo";
import FamilyList from "../FamilyList";
import { getFamiles } from "../../features/family/familySlice";
const DashboardAdmin = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { families } = useAppSelector((state) => state.family);
  const { dashboardAdminLocation } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user && !families) {
      dispatch(getFamiles());
    }
  }, [user]);

  const display = (): JSX.Element => {
    switch (dashboardAdminLocation) {
      case "familyList":
        return <FamilyList />;
      case "familyInfo":
        return <FamilyInfo />;
      default:
        return <FamilyList />;
    }
  };
  return <>{display()}</>;
};

export default DashboardAdmin;
