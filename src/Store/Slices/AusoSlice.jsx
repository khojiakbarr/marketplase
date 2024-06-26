import { createSlice } from "@reduxjs/toolkit";

const AusoSlice = createSlice({
  name: "auso",
  initialState: {
    clienToken: "",
    adminToken: "",
    emploerToken: "",
    loading: "loading",
    error: null,
  },
  reducers: {},
  extraReducers: (builter) => {
    builter
      .addCase(postAdmin.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(postAdmin.fulfilled, (state, action) => {
        state.loading = "loading";
        state.adminToken =  action.payload
      });
  },
});
