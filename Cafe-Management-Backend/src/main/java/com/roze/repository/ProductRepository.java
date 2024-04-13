package com.roze.repository;

import com.roze.dto.ProductDto;
import com.roze.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select new com.roze.dto.ProductDto(p.id,p.name,p.description,p.price,p.status,p.category.id,p.category.name) from Product p")
    List<ProductDto> getAllProducts();

    @Modifying
    @Transactional
    @Query("update Product p set p.status=:status where p.id=:id")
    Integer updateProductStatus(@Param("status") String status, @Param("id") Integer id);

    @Query("select new com.roze.dto.ProductDto(p.id,p.name) from Product p where p.category.id=:id and p.status='true'")
    List<ProductDto> findAllByCategory(Integer id);

    @Query("select new com.roze.dto.ProductDto(p.id,p.name,p.description,p.price) from Product p where p.id=:id")
    ProductDto getProductById(@Param("id") Integer id);
}
