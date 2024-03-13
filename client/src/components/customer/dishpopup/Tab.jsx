import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Reviews } from "./Reviews";
import { Rating } from "@mui/material";
import { RatingBox } from "./RatingBox";

export const BottomTab = ({cancelFunction}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Reviews" value="1" />
            <Tab label="Rate and review" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Reviews/></TabPanel>
        <TabPanel value="2"><RatingBox cancelFunction={cancelFunction} /></TabPanel>
      </TabContext>
    </Box>
  );
};
