import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import React from "react";

export const DetailsCard = ({ totalItems = 4 ,discount = 0}) => {
  return (
    <div>
      <Box
        sx={{
          width: "300px",
          height: "200px",
          borderRadius: 1,
          bgcolor: "#ffff",
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Typography variant="span" component="h4" gutterBottom>
          FOOD DETAILS
        </Typography>
        <Divider sx={{ width: "100%" }} />
        <div
          style={{
            margin: "8px 0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography> Price ({totalItems} items) </Typography>
          <Typography> $110 </Typography>
        </div>
        <div
          style={{
            margin: "8px 0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography> Discount </Typography>
          <Typography> -$10 </Typography>
        </div>
        <div
          style={{
            margin: "8px 0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography> Estimated time </Typography>
          <Typography> 20 mins </Typography>
        </div>
        <Divider variant="middle" />
        <div
          style={{
            margin: "8px 0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{fontWeight:"30px"}}><b>Total Amount</b></Typography>
          <Typography><b>$100</b></Typography>
        </div>
        <Divider variant="middle"   />
      </Box>
    </div>
  );
};
