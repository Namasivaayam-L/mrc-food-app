package org.demo.server.controller;

import org.demo.server.entity.Orders;
import org.demo.server.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders/")
public class OrderCtrl {
    @Autowired
    private OrdersService ordersService;

    @PostMapping("/add")
    public ResponseEntity<Orders> saveOrder(Orders order){
        return ResponseEntity.ok(ordersService.saveOrder(order));
    }
}
