import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DishCard from './dishCard'; // Assuming DishCard is defined elsewhere
import pizzaImage from '../../assets/Margherita Pizza.jpg';
import carbonaraImage from '../../assets/Spaghetti Carbonara.jpg';
import butterChickenImage from '../../assets/Ramen.jpg';
import dosaImage from '../../assets/Dosa.jpg';

const Body = () => {
    const [dishes, setDishes] = useState([
      { name: 'Margherita Pizza', price: '$12.99', image: pizzaImage },
      { name: 'Spaghetti Carbonara', price: '$14.99', image: carbonaraImage },
      { name: 'Chicken Alfredo', price: '$15.99', image: pizzaImage },
      { name: 'Paneer Tikka Masala', price: '₹250', image: carbonaraImage },
      { name: 'Butter Chicken', price: '₹275', image: butterChickenImage },
      { name: 'Dosa', price: '₹120', image: dosaImage },
      { name: 'Sushi', price: '$18.99', image: carbonaraImage },
      { name: 'Pad Thai', price: '$16.99', image: dosaImage },
      { name: 'Ramen', price: '¥1,200', image: butterChickenImage },
    ]);

  const handleAddToCart = (dish) => {
    // Implement your cart functionality here, e.g., using a cart state or integrating with a shopping cart system
    console.log(`Added ${dish.name} to cart!`);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {dishes.map((dish, index) => (
        <DishCard
          key={index}
          name={dish.name}
          price={dish.price}
          image={dish.image}
          handleClick={() => handleAddToCart(dish)}
        />
      ))}
      {dishes.length === 0 && (
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          No dishes available yet.
        </Typography>
      )}
    </Box>
  )
};

export default Body;
