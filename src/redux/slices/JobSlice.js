import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../utils/utils";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Api logic to fetch jobs
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
      const message = getErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  jobsData: [],
  filters: {
    jobRole: null,
    minExp: null,
    location: null,
    minJdSalary: null,
    companyName: "",
  },
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobsList: (state, { payload }) => {
      state.jobsData = payload;
    },
    filterJobs: (state, { payload }) => {
      const { key, value } = payload;
      if (Array.isArray(value)) {
        state.filters = {
          ...state.filters,
          [key]: value.length > 0 ? value : null,
        };
      } else {
        state.filters = {
          ...state.filters,
          [key]: value,
        };
      }
    },
  },
});
const { actions } = jobSlice;
export const { setJobsList, filterJobs } = actions;
export default jobSlice.reducer;
