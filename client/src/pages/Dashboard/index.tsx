import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { DashboardContainer, DashboardContent } from "./dashboard.components";

const Dashbord = () => {
  return (
    <DashboardContainer>
      <DashboardContent>
        <Navbar />
        <Outlet />
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashbord;
