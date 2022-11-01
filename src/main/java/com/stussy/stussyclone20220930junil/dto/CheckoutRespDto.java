package com.stussy.stussyclone20220930junil.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CheckoutRespDto {
    private int pdtDtlId;
    private int pdtId;
    private String pdtName;
    private int pdtPrice;
    private String pdtColor;
    private int sizeId;
    private String sizeName;
    private String saveName;
}
