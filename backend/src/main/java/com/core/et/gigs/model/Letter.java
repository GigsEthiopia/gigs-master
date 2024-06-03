package com.core.et.gigs.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Document(collection = "letters")
public class Letter {
    @Id
    private String _id;
    private String id;
    private String name;
    private String introduction;
    private String body;
    private String end;
    private String bullets;
}
