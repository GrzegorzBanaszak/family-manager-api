import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState } from "../../types";

const initialState: DashboardState = {
  dashboardUserLocation: "transactions",
  dashboardAdminLocation: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardUserLocation: (state, action: PayloadAction<string>) => {
      state.dashboardUserLocation = action.payload;
    },
  },
});
export const { setDashboardUserLocation } = dashboardSlice.actions;
export default dashboardSlice.reducer;
