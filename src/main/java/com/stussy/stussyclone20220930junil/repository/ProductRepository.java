package com.stussy.stussyclone20220930junil.repository;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductRepository {
    public List<?> getProductList() throws Exception;
}
