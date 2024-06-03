package com.core.et.gigs.service;

import java.util.List;

import com.core.et.gigs.dto.LetterDto;

public interface LetterService {

    LetterDto createLetter(LetterDto letterDto);

    LetterDto getLetterByID(String uuid);

    List<LetterDto> getAllLetters(); 

    LetterDto updateLetter(String id, LetterDto letterDto);

    void deleteLetter(String id);
    
}
