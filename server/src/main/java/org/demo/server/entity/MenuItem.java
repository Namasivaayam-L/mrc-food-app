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
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer itemId;
    private String itemName;
    private Integer price;
    private String category;
    private Boolean isInTodaysMenu;
    private byte[] image;
}