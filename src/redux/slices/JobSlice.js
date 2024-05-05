import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getErrorMessage } from "../../utils/utils";

export const fetchJobs = createAsyncThunk(
  "fetchJobs",
  async (params, thunkAPI) => {
    try {
      //   const data = await instance
      //     .post(apiPath.signIn, params)
      //     .then((response) => {
      //       return response.data;
      //     });
      //   return data;
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
