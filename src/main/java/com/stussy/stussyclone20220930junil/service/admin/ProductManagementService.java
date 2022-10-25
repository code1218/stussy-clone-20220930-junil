package com.stussy.stussyclone20220930junil.service.admin;

import com.stussy.stussyclone20220930junil.dto.admin.CategoryResponseDto;
import com.stussy.stussyclone20220930junil.dto.admin.ProductMstOptionRespDto;
import com.stussy.stussyclone20220930junil.dto.admin.ProductRegisterReqDto;

import java.util.List;

public interface ProductManagementService {

    public List<CategoryResponseDto> getCategoryList() throws Exception;

    public void registerMst(ProductRegisterReqDto productRegisterReqDto) throws Exception;

    public List<ProductMstOptionRespDto> getProductMstList() throws Exception;
}
