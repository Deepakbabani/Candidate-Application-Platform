import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getErrorMessage } from "../../utils/utils";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const fetchJobs = createAsyncThunk(
  "fetchJobs",
  async (page, thunkAPI) => {
    try {
      const body = JSON.stringify({
        limit: 10,
        offset: page,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      return response.json();
    } catch (error) {
      //   const message = getErrorMessage(error);
      const message = "";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  jobsData: [],
  filters: {
    limit: "10",
    offset: "0",
  },
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    // setCount: (state, { payload }) => {
    //   state.count += payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, { payload }) => {
      state.token = payload.data?.token;
      state.isLogin = true;
    });
  },
});
const { actions } = jobSlice;
export const { setCount } = actions;
export default jobSlice.reducer;
