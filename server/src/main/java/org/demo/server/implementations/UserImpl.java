package org.demo.server.implementations;

import org.demo.server.entity.MenuItem;
import org.demo.server.entity.Orders;
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
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    @Override
    public User getUserById(Integer id) {
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
    public List<MenuItem> getCurrentOrderItems(Integer userId) {
        List<Orders> ordersList = userRepository.findById(userId).orElse(null).getOrdersList();
//        if(ordersList!=null){
//            return ordersList.stream()
//                    .filter(Orders::getIsCart)
//                    .flatMap(order->order.getOrderItemList())
//                    .collect(Collectors.toList());
//        }
//        return (user != null) ? user.getCurrentOrderItems() : null;
        return null;
    }

    @Override
    public List<Orders> getHistoryOfOrders(Integer id) {
        User user = userRepository.findById(id).orElse(null);
//        return (user != null) ? user.getHistoryOfOrders() : null;
        return null;
    }
}
