package com.roze.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private Integer id;
    private String name;
    private String description;
    private Integer price;
    private String status;

    private Integer categoryId;
    private String categoryName;

    public ProductDto(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public ProductDto(Integer id, String name, String description, Integer price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
