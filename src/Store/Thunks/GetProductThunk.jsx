import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:8080/";
const GET_PRODUCT = "api/webpage/products/pagination";
const getProducts = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get(URL + GET_PRODUCT);
  return response.data;
});

export { getProducts };
