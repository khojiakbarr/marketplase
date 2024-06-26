import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:8080/";
const GET_PRODUCT = "api/webpage/products";

const postAdmin = createAsyncThunk("product/postAdmin", async () => {
  const reesponse = await axios.post(URL + GET_PRODUCT, {});
});

