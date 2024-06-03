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
@Document(collection = "reports")

public class Report {
    @Id
    private String _id;
    private String docID;
    private String type;
    private String userID;
    private String typeID;
    private String title;
    private String content;
    private int status;
    private int time;
    private int handledTime;

}
