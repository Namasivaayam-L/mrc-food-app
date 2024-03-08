package org.demo.server.service;

import org.demo.server.entity.User;
import org.demo.server.entity.Orders;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public User saveUser(User user);
    public User getUserById(Integer id);
    public Integer getBalance(Integer id);
    public Integer updateBalance(Integer id, Integer rechargeAmount);
    public List<OrderItem> getCurrentOrderItems(Integer id);
    public List<Orders> getHistoryOfOrders(Integer id);
}