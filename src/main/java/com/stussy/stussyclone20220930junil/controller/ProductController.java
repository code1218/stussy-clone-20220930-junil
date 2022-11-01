package com.stussy.stussyclone20220930junil.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ProductController {

    @GetMapping("/collections/{category}")
    public String loadCollections(@PathVariable String category) {
        return "product/collections_scroll";
    }

    @GetMapping("/product/{pdtId}")
    public String loadProductDetail(@PathVariable String pdtId) {
        return "product/product_detail";
    }

    @GetMapping("/checkout")
    public String loadPayment(@RequestParam int pdtDtlId) {
        System.out.println(pdtDtlId);
        return "product/product_order";
    }

}
