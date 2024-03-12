package org.demo.server.service;

import org.demo.server.entity.MenuItem;
import org.demo.server.entity.User;
import org.demo.server.entity.Orders;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User saveUser(User user);
    User getUserById(Integer id);
    Integer getBalance(Integer id);
    Integer updateBalance(Integer id, Integer rechargeAmount);
    List<MenuItem> getCurrentOrderItems(Integer id);
    List<Orders> getHistoryOfOrders(Integer id);
}