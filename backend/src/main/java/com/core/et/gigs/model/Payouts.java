package com.core.et.gigs.model;

import java.util.List;

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

@Document(collection = "payouts")
public class Payouts {
    @Id
    private String _id;
    private String docID;
    private int requestedAmount;
    private List<String> applications;
    private int status;
    private int requestedTime;
    private int paidTime;
    private int paidAmount;
    private String from;
    private String receiptNumber;
    private List<String> lastPaidGigs;

}
