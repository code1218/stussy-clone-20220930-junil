package com.stussy.stussyclone20220930junil.api;

import com.stussy.stussyclone20220930junil.dto.RegisterReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/account")
@RestController
public class AccountApi {

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterReqDto registerReqDto) {
        System.out.println("회원가입 요청 데이터: " + registerReqDto);
        return null;
    }

}
