import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FamilyState, TransactionData } from "../../types";
import familyServices from "./familyServices";
const initialState: FamilyState = {
  family: null,
  families: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  transactionError: false,
  transactionSuccess: false,
};

export const getFamily = createAsyncThunk(
  "family/getFamily",
  async (_, thunkAPI) => {
    try {
      return await familyServices.getFamily();
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "family/addTransaction",
  async (data: TransactionData, thunkAPI) => {
    try {
      return await familyServices.addTransaction(data);
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = null;
      state.transactionError = false;
      state.transactionSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFamily.pending, (state) => {
        state.isLoading = true;
        state.transactionSuccess = false;
      })
      .addCase(getFamily.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.family = action.payload;
      })
      .addCase(getFamily.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(addTransaction.fulfilled, (state) => {
        state.transactionSuccess = true;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.transactionError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = familySlice.actions;
export default familySlice.reducer;
