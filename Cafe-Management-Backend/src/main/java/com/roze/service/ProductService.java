package com.roze.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface ProductService {
    ResponseEntity<String> addProduct(Map<String, String> requestMap);
}
