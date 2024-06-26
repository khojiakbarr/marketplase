import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../Thunks/GetProductThunk";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productOne: {},
    products: [],
    loading: "loading",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = "loaging";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = "loading";
        state.error = action.error.message;
      });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
