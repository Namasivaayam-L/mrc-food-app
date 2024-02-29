package org.demo.server.service;

import org.demo.server.entity.Order;

import java.util.List;

public interface OrdersService {
    public Boolean getStatus(Integer id);
    public Order setStatus(Integer id);
    public List<Order>getAcceptedOrders();
    public List<Order>getRejectedOrders();
    public void saveOrders(Order item);
    public Order getOrder(Integer id);
    public void updateOrders(Integer id, Order item);
    public void removeOrders(Integer id);
    public List<Order> getHistoryOfOrders();
}
