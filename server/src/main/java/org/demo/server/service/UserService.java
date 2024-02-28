package org.demo.server.service;

import org.demo.server.entity.OrderItem;
import org.demo.server.entity.User;
import org.demo.server.entity.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public User getUser(Integer id);
    public Integer getBalance(Integer id);
    public Integer updateBalance(Integer id, Integer rechargeAmount);
    public List<OrderItem> getCurrentOrdersItems(Integer id);
    public List<Order> getHistoryOfOrders(Integer id);
}