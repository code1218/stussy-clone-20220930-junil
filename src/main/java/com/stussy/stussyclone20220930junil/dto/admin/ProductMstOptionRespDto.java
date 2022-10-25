package com.stussy.stussyclone20220930junil.dto.admin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductMstOptionRespDto {
    private int pdtId;
    private String category;
    private String pdtName;
}
