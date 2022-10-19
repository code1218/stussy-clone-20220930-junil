package com.stussy.stussyclone20220930junil.dto.admin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryResponseDto {
    private int id;
    private String name;
}
