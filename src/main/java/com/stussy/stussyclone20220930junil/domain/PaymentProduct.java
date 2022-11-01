package com.stussy.stussyclone20220930junil.domain;

import com.stussy.stussyclone20220930junil.dto.CheckoutRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PaymentProduct {
    private int pdt_dtl_id;
    private int pdt_id;
    private String pdt_name;
    private int pdt_price;
    private String pdt_color;
    private int size_id;
    private String size_name;
    private String save_name;

    public CheckoutRespDto toDto() {
        return CheckoutRespDto.builder()
                .pdtDtlId(pdt_dtl_id)
                .pdtId(pdt_id)
                .pdtName(pdt_name)
                .pdtPrice(pdt_price)
                .pdtColor(pdt_color)
                .sizeId(size_id)
                .sizeName(size_name)
                .saveName(save_name)
                .build();
    }
}
