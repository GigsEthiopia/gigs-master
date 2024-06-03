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

@Document(collection = "posts")
public class Post {
    @Id
    private String _id;
    private String userID;
    private String gigID;
    private int type;
    private int category;
    private String title;
    private String longDescription;
    private String location;
    private List<String> requirements;
    private String timeOfWork;
    private String delivery;
    private String paymentPerPerson;
    private String totalPayment;
    private String imageUrl;
    private int time;
    private int numPeople;
    private boolean isAccepting;
    private int status;
    private List<String> tags;
    private String imageFileName;
    private String referenceNumber;
    private int postDepositStatus;
    private int paidTime;
    private String reciptNumber;
    private String searchKeyCategory;
    private List<String> searchKeyTags;
    private int delete;

}
