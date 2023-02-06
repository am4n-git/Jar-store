import React from "react";
import { useFilter } from "../Context/filter-context";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Filter() {
  const { filterDispatch, filterSelected } = useFilter();
  function handleFilters(description) {
    filterDispatch({
      type: description,
    });
  }
  return (
    <div>
      <Stack direction="row" spacing={1} sx={{ mt: 1, ml: 5 }}>
        <Chip
          label="High to Low"
          variant={filterSelected === "High to Low" ? "filled" : "outlined"}
          clickable
          onClick={() => handleFilters("High_To_Low")}
          onDelete={() => filterSelected && handleFilters("Clear")}
        />
        <Chip
          label="Low to High"
          variant={filterSelected === "Low to High" ? "filled" : "outlined"}
          clickable
          onClick={() => handleFilters("Low_To_High")}
          onDelete={() => filterSelected && handleFilters("Clear")}
        />
      </Stack>
    </div>
  );
}

export default Filter;
