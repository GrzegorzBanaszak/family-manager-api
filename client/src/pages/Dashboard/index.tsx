import { Outlet } from "react-router-dom";
import { DashboardContainer } from "./dashboard.components";

const Dashbord = () => {
  return (
    <DashboardContainer>
      <Outlet />
    </DashboardContainer>
  );
};

export default Dashbord;
