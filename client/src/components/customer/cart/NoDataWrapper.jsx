import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NoDataWrapper = () => {
    const navigate = useNavigate();
  return <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <img style={{width:"200px",height:"200px"}} src="../src/assets/empty cart.png" alt="" />
    <Typography>Your cart is empty..!</Typography>
    <Typography fontSize={12}>Add items to it now.</Typography>
    <Button style={{marginTop:"10px"}} variant="contained" size="medium" onClick={()=>{navigate("/chef/todaysMenu")}} >Go to menu</Button>
  </div>;
};
