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
public class Role {
    private int id;
    private String name;
    private LocalDateTime create_date;
    private LocalDateTime update_date;
}
