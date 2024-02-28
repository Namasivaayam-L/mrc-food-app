package org.demo.server.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    @Column(length = 15)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    @Column(length = 15)
    private String userName;
    @Column(length = 15)
    private Integer balance;
    @Column(length = 25)
    private String email;
    private Boolean isChef;
}
