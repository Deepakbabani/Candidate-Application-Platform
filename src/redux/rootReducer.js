import { combineReducers } from "@reduxjs/toolkit";

// Reducers/Slices which will handle Api logic and state management
import jobReducer from "./slices/JobSlice";

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer;
