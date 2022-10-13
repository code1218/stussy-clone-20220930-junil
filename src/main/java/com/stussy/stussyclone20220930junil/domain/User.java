package com.stussy.stussyclone20220930junil.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    private String id;
    private String email;
    private String password;
    private String name;
    private String provider;
    private int role_id;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

    private Role role;
}
