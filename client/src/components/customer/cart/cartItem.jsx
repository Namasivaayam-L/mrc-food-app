import React from "react";
import { Box, Rating, ThemeProvider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const CartItem = ({key, itemName = "Ambur briyani", itemCount, price, subTotal,style,itemRating ,removeItem}) => {
  const [count, setCount] = React.useState(itemCount);

  const handleIncrementCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrementCounter = () => {
    if (count != 0) setCount((prevState) => prevState - 1);
  };

  const handleRemove = ()=>{
    removeItem();
  }
  return (
    <div style={{...style,width:"600px"}}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 1,
          bgcolor: "#ffff",
          padding:"20px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "initial",
          }}
        >
          <img
            src="../src/assets/profile.jpg"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50px",
              margin: "20px",
            }}
            alt="food image"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
                style={{
                  margin: "25px 0 5px 0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ margin: "" ,fontFamily:"Roboto, Arial, sans-serif"}}>{itemName}</span>
                <Rating
                  style={{ margin: "4px" }}
                  name="read-only"
                  value={itemRating}
                  size="small"
                  readOnly
                />
              </div>
            <span style={{margin: "0 0 5px 0",fontFamily:"Roboto, Arial, sans-serif"}}>Price: ${price}</span>
            <span style={{fontFamily:"Roboto, Arial, sans-serif"}}>Subtotal: ${subTotal}</span>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
          <div
            style={{
              border: "1px solid blue",
              borderRadius: "10px",
              width: "fit-content",
              height: "20%",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: "6px",
            }}
          >
            <Button onClick={handleIncrementCounter} size="small">
              <AddIcon />
            </Button>
            <span style={{ padding: "3px" }}>{count}</span>
            <Button onClick={handleDecrementCounter} size="small">
              <RemoveIcon />
            </Button>
          </div>
          <Button onClick={handleRemove} style={{color:"#000"}}>Remove</Button>
        </div>
      </Box>
    </div>
  );
};
