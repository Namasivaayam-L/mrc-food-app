package org.demo.server.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@NoArgsConstructor
public class OrderItem {
    @Id
    @Column(length = 15)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderItemId;

    @ManyToOne
    @JoinColumn(name = "orderId", referencedColumnName = "orderId")
    @Column(length = 15)
    private Order orderId;

    @Column(length = 15)
    private Integer itemId;

    @Column(length = 15)
    private Integer quantity;

    @Column(length = 15)
    private Integer subTotal;
}
