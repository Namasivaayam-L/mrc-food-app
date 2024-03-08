package org.demo.server.repository;

import org.demo.server.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface OrdersRepository extends JpaRepository<Orders, Integer> {
}
