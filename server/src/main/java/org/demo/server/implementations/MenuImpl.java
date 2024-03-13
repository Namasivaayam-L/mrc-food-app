package org.demo.server.implementations;

import org.demo.server.repository.MenuRepository;
import org.demo.server.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.demo.server.entity.MenuItem;
import java.util.List;

public class MenuImpl implements MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public String addMenuItem(MenuItem item) {
        try {
            menuRepository.save(item);
            return "success";
        } catch (Exception e) {
             return e.getMessage();
        }
    }

    @Override
    public void updateItem(Integer id, MenuItem updatedItem) {
        try{
            MenuItem item = menuRepository.findById(id).orElse(null);
            if(item != null){
                item.setItemName(updatedItem.getItemName());
                item.setPrice(updatedItem.getPrice());
                menuRepository.save(item);
            }
        }
        catch (Exception e){
            e.getStackTrace();
        }
    }


    @Override
    public void deleteItem(Integer id) {
        try{
            menuRepository.deleteById(id);
        }
        catch (Exception e){
            e.getStackTrace();
        }
    }

    @Override
    public MenuItem getMenuItem(Integer id) {
        try{
            MenuItem item = menuRepository.findById(id).orElse(null);
            if(item != null) return item;
        }
        catch (Exception e){
            e.getStackTrace();
        }
        return null;
    }

    @Override
    public List<MenuItem> getListMenuItems() {
        try{
            List<MenuItem> items = menuRepository.findAll();
            if(items.size()!=0) return items;
        }
        catch (Exception e){
            e.getStackTrace();
        }
        return null;
    }
}
