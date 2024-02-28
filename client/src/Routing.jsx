import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './pages/home/home';
import CustTodaysMenu from './pages/customer/custTodaysMenu';
import CustOrders from './pages/customer/custOrders';
import ChefOrders from './pages/chef/chefOrders';
import ChefTodaysMenu from './pages/chef/chefTodaysMenu';

const Routing = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/cust/todaysMenu' element={<CustTodaysMenu/>}/>
        <Route path='/cust/orders' element={<CustOrders/>}/>
        <Route path='/chef/todaysMenu' element={<ChefTodaysMenu/>}/>
        <Route path='/chef/orders' element={<ChefOrders/>}/> 
    </Routes>
  )
}

export default Routing