import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import OrdersTable from '../../components/chef/ordersTable';

const ChefOrders = () => {
  return (
    <div style={{
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '3%',
      }}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div">
                Orders
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Container>
            <OrdersTable/>
        </Container>
    </div>
  )
}

export default ChefOrders
