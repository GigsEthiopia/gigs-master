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
@Document(collection = "rates")
public class Rate {

    @Id
    private String _id;
    private int time;
    private double rate;
    private String raterID;
    private String comment;
    private String applicationIDRaterID;

}
