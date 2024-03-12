import { Button, Rating, TextField } from "@mui/material";
import React from "react";

export const RatingBox = () => {
  const [userRating, setUserRating] = React.useState(0);
  return (
    <div style={{width:"100%"}}>
      <TextField
        label="Write review"
        multiline
        rows={2}
        style={{ margin: "5px", width: "80%", fontSize: "1px" }}
        size="small"
      />
      <Rating
        value={userRating}
        style={{ margin: "0 0 10px 10px" }}
        onChange={(event, newValue) => {
          setUserRating(newValue);
        }}
      />
      <div>
        <Button style={{ margin: "10px" }} variant="contained" size="small">
          Submit
        </Button>
        <Button style={{ margin: "10px" }} variant="contained" size="small">
          cancel
        </Button>
      </div>
    </div>
  );
};
