package org.demo.server.controller;


import jakarta.servlet.ServletRequest;
import org.demo.server.entity.User;
import org.demo.server.repository.UserRepository;
import org.demo.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/users/")
public class UserCtrl {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUser(@PathVariable("userId") Integer userId){
        User user = userService.getUserById(userId);
        if(user!=null){
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/balance/{userId}")
    public Integer getBalance(@PathVariable("userId") Integer userId) {
        return userService.getBalance(userId);
    }

    @PostMapping("/balance/update/")
    public Integer updateBalance(ServletRequest request) throws IOException {
        Integer userId = Integer.valueOf(request.getParameter("userId"));
        Integer rechargeAmount = Integer.valueOf(request.getParameter("rechargeAmount"));
        return userService.updateBalance(userId, rechargeAmount);
    }
}
