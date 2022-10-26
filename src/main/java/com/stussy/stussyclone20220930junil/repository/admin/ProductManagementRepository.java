package com.stussy.stussyclone20220930junil.repository.admin;

import com.stussy.stussyclone20220930junil.domain.OptionProductMst;
import com.stussy.stussyclone20220930junil.domain.OptionProductSize;
import com.stussy.stussyclone20220930junil.domain.Product;
import com.stussy.stussyclone20220930junil.domain.ProductCategory;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
    public List<ProductCategory> getCategoryList() throws Exception;
    public int saveProductMst(Product product) throws Exception;
    public List<OptionProductMst> getProductMstList() throws Exception;

    public List<OptionProductSize> getSizeList(int productId) throws Exception;
}
