package com.stussy.stussyclone20220930junil.api.admin;

import com.stussy.stussyclone20220930junil.aop.annotation.LogAspect;
import com.stussy.stussyclone20220930junil.aop.annotation.ValidAspect;
import com.stussy.stussyclone20220930junil.dto.CMRespDto;
import com.stussy.stussyclone20220930junil.dto.admin.ProductRegisterReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin")
public class ProductAdminApi {

    @LogAspect
    @ValidAspect
    @PostMapping("/product")
    public ResponseEntity<?> registerProductMst(@Valid @RequestBody ProductRegisterReqDto productRegisterReqDto,
                                                BindingResult bindingResult) {

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("Register Successfully", null));
    }

    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() {

        return ResponseEntity.ok().body(new CMRespDto<>("Get Successfully", null));
    }

}
