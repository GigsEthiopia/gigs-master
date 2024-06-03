package com.core.et.gigs.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")

public class User {
    @Id
    private String uuid;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private int verified;

    @DBRef
    private Key keys;
}
