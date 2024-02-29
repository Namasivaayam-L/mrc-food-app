package org.demo.server.service;

import org.demo.server.entity.OrderItem;

import java.util.List;

public interface OrderItemServices {
    public void saveOrderItem(List<OrderItem> orderItems);
    public List<OrderItem> getOrderItems(Integer id);
    public void removeOrderItems(List<OrderItem> orderItems);
}