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

@Document(collection = "messages")

public class Message {
    @Id
    private String _id;
    private String docID;
    private String idTo;
    private String idFrom;
    private String timestamp;
    private String content;
    private String type;
    private int delete;
    private boolean isEdited;
    private boolean isSeen;
    private String imageFileName;
    
}
