import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState, AppThunk } from "./store"

export interface UserState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: UserState = {
  value: 0,
  status: "idle",
}

/* export const incrementAsync = createAsyncThunk(
  "user/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
); */

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    /*     login: (state, action: PayloadAction<string>) => {},
    logout: state => {}, */
  },

  extraReducers: builder => {
    /*     builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      }); */
  },
})

/* export const { login, logout } = userSlice.actions */

export const selectUser = (state: AppState) => state.user.value

export default userSlice.reducer
