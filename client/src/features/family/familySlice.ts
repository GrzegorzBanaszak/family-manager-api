import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  AddMoneyDate,
  FamilyState,
  TransactionData,
  TransactionDto,
  TransactionMoneyDto,
} from "../../types";
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
export const getFamiles = createAsyncThunk(
  "family/getFamiles",
  async (_, thunkAPI) => {
    try {
      return await familyServices.getFamiles();
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

export const addMoney = createAsyncThunk(
  "family/addMoney",
  async (data: AddMoneyDate, thunkAPI) => {
    try {
      return await familyServices.addMoney(data);
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
    familyLogoutReset: (state) => {
      state.family = null;
      state.families = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = null;
      state.transactionError = false;
      state.transactionSuccess = false;
    },
    setFamily: (state, action: PayloadAction<string>) => {
      const family = state.families?.find((f) => f._id === action.payload);

      if (family) {
        state.family = family;
      }
    },
    resetFamily: (state) => {
      state.family = null;
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
      .addCase(getFamiles.pending, (state) => {
        state.isLoading = true;
        state.transactionSuccess = false;
      })
      .addCase(getFamiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.families = action.payload;
      })
      .addCase(getFamiles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(
        addTransaction.fulfilled,
        (state, action: PayloadAction<TransactionDto>) => {
          state.transactionSuccess = true;
          if (state.family) {
            state.family.cash = action.payload.cash;
            state.family.transactions = action.payload.transactions;
          }
        }
      )
      .addCase(addTransaction.rejected, (state, action) => {
        state.transactionError = true;
        state.message = action.payload as string;
      })
      .addCase(
        addMoney.fulfilled,
        (state, action: PayloadAction<TransactionMoneyDto>) => {
          state.transactionSuccess = true;
          const familyToUpdate = state.families?.find(
            (f) => f._id === action.payload.id
          );

          if (familyToUpdate) {
            familyToUpdate.cash = action.payload.cash;
            familyToUpdate.transactions = action.payload.transactions;
            state.family = familyToUpdate;
          }
        }
      )
      .addCase(addMoney.rejected, (state, action) => {
        state.transactionError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset, familyLogoutReset, setFamily, resetFamily } =
  familySlice.actions;
export default familySlice.reducer;
