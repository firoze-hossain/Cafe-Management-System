package com.roze.service;

import com.roze.entity.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface CategoryService {
    ResponseEntity<String> addNewCategory(Map<String, String> requestMap);

     ResponseEntity<List<Category>> getAllCategory(String filterValue);
}
