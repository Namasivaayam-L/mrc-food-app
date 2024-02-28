package org.demo.server.service;

import org.demo.server.entity.Order;

import java.util.List;

public interface OrdersService {
    public Boolean getStatus(Integer id);
    public Order setStatus(Integer id);
    public List<Order>getAcceptedOrders();
    public List<Order>getRejectedOrders();

}
