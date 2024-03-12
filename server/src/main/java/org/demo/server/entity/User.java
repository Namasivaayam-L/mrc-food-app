package org.demo.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Table
@Entity
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;
    private String userName;
    private String password;
    private Integer balance;
    private String email;
    private Boolean isChef;
    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<Orders> ordersList;
}
