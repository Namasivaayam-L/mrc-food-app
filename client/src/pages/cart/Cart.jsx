import React, { useState } from "react";
import { CartItem } from "../../components/customer/cart/cartItem";
import { DetailsCard } from "../../components/customer/cart/DetailsCard";
import { Button } from "@mui/material";
import initialData from "../../data/cart.json"
import { NoDataWrapper } from "../../components/customer/cart/NoDataWrapper";

export const Cart = () => {
  
  const [data, setData] = useState(initialData);

  const removeItem = (indexToRemove) => {
    const newCart = data.filter((_, index) => index !== indexToRemove);
    setData(newCart); 
  }

  return (
    <>
      {data.length !== 0 ? <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "row"
        }}
      >
        <div>
          {data.map((item,index) => (
            <CartItem
              key={index} 
              itemName={item.itemName}
              itemCount={item.itemCount}
              price={item.price}
              subTotal={item.subTotal}
              itemRating={item.itemRating}
              removeItem={() => removeItem(index)}
              style={{
                display: "flex",
                margin: "20px",
              }}
            />
          ))}
        </div>
        <div style={{margin:"20px", display:"flex",flexDirection:"column"}}>
          <DetailsCard totalItems={data.length}  />
          <Button style={{marginTop:"10px"}} variant="contained" size="large">PLACE ORDER</Button>
        </div>
      </div>:
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",height:"80vh"}}>
        <NoDataWrapper/>
      </div>
      }
    </>
  );
};
