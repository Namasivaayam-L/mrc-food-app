package org.demo.server.repository;

import org.demo.server.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface MenuRepository extends JpaRepository<MenuItem, Integer> {
}
