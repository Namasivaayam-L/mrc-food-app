import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MenusTable from '../../components/chef/menusTable';


const ChefTodaysMenu = (props) => {
  return (
    <div style={{
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '3%',
      }}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Box sx={{width:'100%', display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <Typography variant="h6" component="div">
                        Today's Menu
                    </Typography>
                </Box>
                <Box>
                    <Button variant="h6" component="div">
                        Add new Dish
                    </Button>
                </Box>  
            </Box>
          </Toolbar>
        </AppBar>
        <br />
        <Container>
            <MenusTable/>
        </Container>
    </div>
  )
}

export default ChefTodaysMenu
