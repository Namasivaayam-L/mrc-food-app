package org.demo.server.service;

import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public interface MenuService {
    public void addMenuItem(MenuItem item);

    public void updateItem(Integer id, MenuItem item);
    public void deleteItem(Integer id);
    public MenuItem getMenuItem(Integer id);
    public List<MenuItem> getListMenuItems();
}
