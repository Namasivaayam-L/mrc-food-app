package org.demo.server.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@NoArgsConstructor
public class Order {
    @Id
    @Column(length = 15)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    @Column(length = 15)
    private User userId;

    @Column(length = 15)
    private String dishName;

    @Column(length = 15)
    private Integer totalAmount;

    private Boolean status;
}
