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

public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User userId;
    private Integer totalAmount;
    private String status;
    @OneToMany(mappedBy = "orderId", cascade = CascadeType.ALL)
    private List<OrderItem> orderItemList;
}
