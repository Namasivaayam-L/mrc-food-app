package org.demo.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor

public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderItemId;
    @ManyToOne
    @JoinColumn(name = "orderId", referencedColumnName = "orderId")
    private Orders orderId;
    private Integer itemId;
    private String itemName;
    private Integer quantity;
    private Integer subTotal;
}
