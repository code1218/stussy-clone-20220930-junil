package com.stussy.stussyclone20220930junil.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDetail {
    private int id;
    private int pdt_id;
    private int size_id;
    private String size_name;
    private String pdt_color;
    private int pdt_stock;
}
