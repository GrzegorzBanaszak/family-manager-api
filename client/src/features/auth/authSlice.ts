import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, LoginData, RegisterData } from "../../types";
import authServices from "./authServices";

const initialState: AuthState = {
  user: null,
  familyVerified: null,
  familyVerifiedError: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

export const familyCheck = createAsyncThunk(
  "auth/familyCheck",
  async (verificationKey: string, thunkAPI) => {
    try {
      return await authServices.familyCheck(verificationKey);
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginData, thunkAPI) => {
    try {
      return await authServices.login(data);
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: RegisterData, thunkAPI) => {
    try {
      return await authServices.register(data);
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    return await authServices.getUser();
  } catch (error: any) {
    const message =
      error.response.data.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.familyVerified = null;
      state.familyVerifiedError = "";
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = null;
    },
    setFormError: (state, action) => {
      state.isError = true;
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(familyCheck.pending, (state) => {
        state.familyVerified = null;
        state.familyVerifiedError = "";
      })
      .addCase(familyCheck.fulfilled, (state, action) => {
        state.familyVerified = action.payload;
      })
      .addCase(familyCheck.rejected, (state, action) => {
        state.familyVerifiedError = action.payload as string;
      });
  },
});
export const { reset, setFormError } = authSlice.actions;
export default authSlice.reducer;
