package com.roze.repository;

import com.roze.dto.ProductDto;
import com.roze.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select new com.roze.dto.ProductDto(p.id,p.name,p.description,p.price,p.status,p.category.id,p.category.name) from Product p")
    List<ProductDto> getAllProducts();
}
