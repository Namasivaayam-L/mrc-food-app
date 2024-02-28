import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

const DishCard = ({ name, price, image, handleClick }) => {
    return (
        <Card sx={{ minWidth: 275, minHeight: 250, m:1 }}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ height: 140, width: '100%' }}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{m:1, textAlign:'left'}}>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Box sx={{m:1, textAlign:'center', ml:'auto'}}>
                    <Typography variant="body2">{price}</Typography>
                </Box>
              <Button variant="contained" onClick={handleClick} sx={{ ml: 'auto' }}>
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      );
};
export default DishCard