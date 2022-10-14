package com.stussy.stussyclone20220930junil.security;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        if(exception.getClass() == UsernameNotFoundException.class || exception.getClass() == BadCredentialsException.class) {
            response.sendRedirect("/account/login?error=auth");

        }else if(exception.getClass() == CredentialsExpiredException.class){
            response.sendRedirect("/account/login?error=passwordExpired");

        }else {
            response.sendRedirect("/account/login?error");
        }
    }

}
