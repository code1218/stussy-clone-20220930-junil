package com.stussy.stussyclone20220930junil.service;

import com.stussy.stussyclone20220930junil.dto.CollectionListRespDto;

import java.util.List;

public interface ProductService {
    public List<CollectionListRespDto> getProductList(String category, int page) throws Exception;
}
