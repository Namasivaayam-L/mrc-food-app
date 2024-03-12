import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Avatar, Box, Rating, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { RatingBox } from "./RatingBox";
import { BottomTab } from "./Tab";

export default function DishPopup() {
  const [open, setOpen] = React.useState(false);
  // const [enableRating, setEnableRating] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [count, setCount] = React.useState(0);

  const handleIncrementCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrementCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  const profileStyle = {
    backgroundImage: "url(../src/assets/Margherita Pizza.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    width: "500px",
    height: "900px",
  };

  const avatarStyle = {
    width: "120px",
    height: "120px",
    border: "4px solid #fff",
    position: "absolute",
    top: "10%",
    left: "12%",
    transform: "translateX(-50%)",
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        This is food card
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{height:"600px",display:"flex",alignItems: "center",justifyContent:"center"}}
      >
        <Box sx={profileStyle}>
          <div>
            <img
              src="../src/assets/banner.jpg"
              alt=""
              style={{ width: "500px", height: "120px" }}
            />
          </div>
          <div>
            <Avatar
              src="../src/assets/profile.jpg"
              alt="Profile Photo"
              sx={avatarStyle}
            />
            <div
              style={{
                padding: "65px 5px 0 5px",
                margin: "0",
                display: "flex",
                // width:"500px",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  margin: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h3>Ambur briyani</h3>
                <Rating
                  style={{ margin: "4px" }}
                  name="read-only"
                  value={4}
                  size="small"
                  readOnly
                />
              </div>
              <div
                style={{
                  border: "1px solid blue",
                  borderRadius: "10px",
                  width: "30.5%",
                  height: "20%",
                  alignItems: "center",
                  justifyContent:"space-evenly",
                  margin: "0",
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
            </div>
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
          }}
        >
          <h4 style={{ padding: "0 0 5px 5px", margin: "0" }}>
            Spice up your life, one biryani bite at a time. 🌶️🍚 #BiryaniBliss
          </h4>
          <h4 style={{ padding: "0 0 5px 5px", margin: "0" }}>Price: $10</h4>
          <BottomTab></BottomTab>
          {/* {enableRating ? (
            <RatingBox />
          ) : (
            <Button onClick={() => setEnableRating(!enableRating)} size="small">
              Rate & review
            </Button>
          )} */}
        </div>
        </Box>
        
      </Dialog>
    </React.Fragment>
  );
}
