package com.roze.service;

import com.roze.dto.ProductDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface ProductService {
    ResponseEntity<String> addProduct(Map<String, String> requestMap);

    ResponseEntity<List<ProductDto>> getAllProducts();

    ResponseEntity<String> updateProduct(Map<String, String> requestMap);
}
