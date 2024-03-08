package org.demo.server.implementations;

import org.demo.server.entity.Orders;
import org.demo.server.repository.OrdersRepository;
import org.demo.server.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderImpl implements OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    @Override
    public Orders saveOrder(Orders order){
        return ordersRepository.save(order);
    }

    @Override
    public Boolean getStatus(Integer id) {
        return null;
    }

    @Override
    public Orders setStatus(Integer id) {
        return null;
    }

    @Override
    public List<Orders> getAcceptedOrders() {
        return null;
    }

    @Override
    public List<Orders> getRejectedOrders() {
        return null;
    }

    @Override
    public void saveOrders(Orders item) {

    }

    @Override
    public Orders getOrder(Integer id) {
        return null;
    }

    @Override
    public void updateOrders(Integer id, Orders item) {

    }

    @Override
    public void removeOrders(Integer id) {

    }

    @Override
    public List<Orders> getHistoryOfOrders() {
        return null;
    }
}
