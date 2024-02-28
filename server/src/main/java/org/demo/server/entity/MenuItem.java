package org.demo.server.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@NoArgsConstructor
public class MenuItem {
    @Id
    @Column(length = 15)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer itemId;

    @Column(length = 15)
    public String itemName;

    @Column(length = 15)
    private Integer price;

}
