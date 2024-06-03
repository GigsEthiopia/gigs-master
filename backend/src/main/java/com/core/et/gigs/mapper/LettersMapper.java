package com.core.et.gigs.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.core.et.gigs.dto.LetterDto;
import com.core.et.gigs.model.Letter;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LettersMapper {
     private ModelMapper modelMapper;

    public  LetterDto modelMapToLetterDto(Letter letter) {
        LetterDto letterDto = modelMapper.map(letter, LetterDto.class);
        return letterDto;
    }

    public  Letter modelMapToLetter(LetterDto LetterDto) {
        Letter letter = modelMapper.map(LetterDto, Letter.class);
        return letter;
    }
    
}
