package com.roze.repository;

import com.roze.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query("select c from Category c where c.id in (select p.category.id from Product p where p.status = 'true')")
    List<Category> getAllCategory();


}
