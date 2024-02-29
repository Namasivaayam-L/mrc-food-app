package org.demo.server.implementations;

import org.demo.server.entity.Order;
import org.demo.server.entity.OrderItem;
import org.demo.server.entity.User;
import org.demo.server.repository.UserRepository;
import org.demo.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public User getUser(Integer id) {

        return userRepository.findById(id).orElse(null);
    }

    @Override
    public Integer getBalance(Integer id) {
        User user = userRepository.findById(id).orElse(null);
        return (user != null) ? user.getBalance() : null;
    }

    @Override
    public Integer updateBalance(Integer id, Integer rechargeAmount) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setBalance(user.getBalance() + rechargeAmount);
            userRepository.save(user);
            return user.getBalance();
        }
        return null;
    }

    @Override
    public List<OrderItem> getCurrentOrderItems(Integer id) {
        User user = userRepository.findById(id).orElse(null);
        return (user != null) ? user.getCurrentOrderItems() : null;
    }

    @Override
    public List<Order> getHistoryOfOrders(Integer id) {
        User user = userRepository.findById(id).orElse(null);
        return (user != null) ? user.getHistoryOfOrders() : null;
    }
}
