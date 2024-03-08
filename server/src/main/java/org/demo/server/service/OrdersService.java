package org.demo.server.service;

import org.demo.server.entity.Orders;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface OrdersService {
    public Orders saveOrder(Orders order);
    public Boolean getStatus(Integer id);
    public Orders setStatus(Integer id);
    public List<Orders>getAcceptedOrders();
    public List<Orders>getRejectedOrders();
    public void saveOrders(Orders item);
    public Orders getOrder(Integer id);
    public void updateOrders(Integer id, Orders item);
    public void removeOrders(Integer id);
    public List<Orders> getHistoryOfOrders();
}
