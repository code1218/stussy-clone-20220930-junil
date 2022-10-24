package com.stussy.stussyclone20220930junil.service;

import com.stussy.stussyclone20220930junil.dto.CollectionListRespDto;
import com.stussy.stussyclone20220930junil.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<CollectionListRespDto> getProductList() throws Exception {
        return null;
    }

}
