import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState } from "../../types";

const initialState: DashboardState = {
  dashboardUserLocation: "transactions",
  dashboardAdminLocation: "familyList",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardUserLocation: (state, action: PayloadAction<string>) => {
      state.dashboardUserLocation = action.payload;
    },
    setDashboardAdminLocation: (state, action: PayloadAction<string>) => {
      state.dashboardAdminLocation = action.payload;
    },
  },
});
export const { setDashboardUserLocation, setDashboardAdminLocation } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
