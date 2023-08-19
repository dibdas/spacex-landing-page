import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCapsuleData = createAsyncThunk(
  "/data/",
  async (_, thunkAPI) => {
    try {
      console.log("asyncthunkgetMyInfo");
      const responseAsyncThunk = await axios.get(
        "https://api.spacexdata.com/v3/capsules"
      );

      console.log(`api called from getInfo configSlice`, responseAsyncThunk);

      return responseAsyncThunk;
    } catch (err) {
      return Promise.reject(err);
    } finally {
    }
  }
);

const dataConfigSlice = createSlice({
  name: "userConfigSlice",

  initialState: {
    spaceCapsuleData: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getCapsuleData.fulfilled, (state, action) => {
      console.log(action.payload);

      state.spaceCapsuleData = action.payload;
    });
  },
});

export default dataConfigSlice.reducer;
