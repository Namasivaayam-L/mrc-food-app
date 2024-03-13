package org.demo.server.service;
import org.demo.server.entity.MenuItem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MenuService {
    public String addMenuItem(MenuItem item);

    public void updateItem(Integer id, MenuItem updatedItem);
    public void deleteItem(Integer id);
    public MenuItem getMenuItem(Integer id);
    public List<MenuItem> getListMenuItems();
}
