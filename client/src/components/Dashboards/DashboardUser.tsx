import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Navbar from "../Navbar";
import { DashboardContainer } from "./dashboards.components";
import { getFamily } from "../../features/family/familySlice";
const DashboardUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { family } = useAppSelector((state) => state.family);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && !family) {
      dispatch(getFamily());
    }
  }, [user]);
  return (
    <DashboardContainer>
      <Navbar />
    </DashboardContainer>
  );
};

export default DashboardUser;
