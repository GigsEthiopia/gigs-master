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

@Document(collection = "applications")

public class Application {
    @Id
    private String _id;
    private int time;
    private String gigID;
    private String applicantID;
    private String docID;
    private String posterID;
    private int gigType;
    private int status;
    private int acceptedTime;
    private String paymentAmount;
    private int paidStatus;
    private int paidTime;

}
