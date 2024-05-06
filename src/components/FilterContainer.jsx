import Select from "react-select";
import { Box, TextField } from "@mui/material";

import {
  EXPERIENCE_LIST,
  LOCATION_LIST,
  MIN_SALARY_LIST,
  ROLES_LIST,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { filterJobs } from "../redux/slices/JobSlice";
import { useEffect, useState } from "react";

const FilterContainer = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (name, value) => {
    dispatch(
      filterJobs({
        key: name,
        value,
      })
    );
  };

  // Search filter with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        filterJobs({
          key: "companyName",
          value: searchTerm,
        })
      );
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, dispatch]);

  return (
    <div className="profile-sidebar jd-filters-container MuiBox-root css-1yxoz1i">
      <Box className="MuiBox-root css-b62m3t-container">
        <Select
          id="roles"
          className="select__input"
          closeMenuOnSelect={false}
          isMulti
          placeholder={`Roles`}
          options={ROLES_LIST}
          onChange={(val) => handleFilterChange("jobRole", val)}
        />
      </Box>
      <Box className="MuiBox-root css-b62m3t-container">
        <Select
          id="experience"
          className="select__input"
          closeMenuOnSelect={false}
          placeholder="Experience"
          options={EXPERIENCE_LIST}
          onChange={(val) => handleFilterChange("minExp", val)}
        />
      </Box>
      <Box className="MuiBox-root css-b62m3t-container">
        <Select
          id="remote"
          className="select__input"
          closeMenuOnSelect={false}
          isMulti
          placeholder="Remote"
          options={LOCATION_LIST}
          onChange={(val) => handleFilterChange("location", val)}
        />
      </Box>
      <Box className="MuiBox-root css-13cymwt-control">
        <Select
          id="minimum-base-pay"
          className="select__input"
          closeMenuOnSelect={false}
          placeholder="Minimum Base Pay Salary"
          options={MIN_SALARY_LIST}
          onChange={(val) => handleFilterChange("minJdSalary", val)}
        />
      </Box>
      <Box className="MuiBox-root css-j7qwjs">
        <div className="MuiFormControl-root MuiTextField-root css-1upf982">
          <TextField
            id="companyName"
            name="companyName"
            placeholder="Search Company Name"
            variant="outlined"
            className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1d5t4lq"
            inputProps={{
              className:
                "MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq",
            }}
            onChange={handleSearch}
            autoComplete="off"
            aria-invalid="false"
          />
        </div>
      </Box>
    </div>
  );
};

export default FilterContainer;
