import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import familyReducer from "../features/family/familySlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    family: familyReducer,
    dashboard: dashboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
