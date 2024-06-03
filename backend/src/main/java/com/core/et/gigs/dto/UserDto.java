package com.core.et.gigs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String uuid;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private int verified;
    
}
