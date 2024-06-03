package com.core.et.gigs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LetterDto {
    private String id;
    private String name;
    private String introduction;
    private String body;
    private String end;
    private String bullets;
}
