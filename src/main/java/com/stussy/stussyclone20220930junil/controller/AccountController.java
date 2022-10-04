package com.stussy.stussyclone20220930junil.controller;

import com.stussy.stussyclone20220930junil.dto.RegisterReqDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {

    @GetMapping("/account/login")
    public String login() {
        return "account/login";
    }

    @GetMapping("/account/register")
    public String register() {
        return "account/register";
    }
}
