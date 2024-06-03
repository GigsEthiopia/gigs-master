package com.core.et.gigs.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.core.et.gigs.dto.LetterDto;
import com.core.et.gigs.exception.ResourceNotFoundException;
import com.core.et.gigs.mapper.LettersMapper;
import com.core.et.gigs.model.Letter;
import com.core.et.gigs.repository.LettersRepository;
import com.core.et.gigs.service.LetterService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class LetterServiceImplementation implements LetterService {

    private LettersRepository lettersRepository;
    private LettersMapper lettersMapper;

    @Override
    public LetterDto createLetter(LetterDto letterDto) {
        Letter letter = lettersMapper.modelMapToLetter(letterDto);

        log.info("Adding new letter: {}", letter.getName());

        Letter savedLetter = lettersRepository.save(letter);

        return lettersMapper.modelMapToLetterDto(savedLetter);
    }

    @Override
    public LetterDto getLetterByID(String id) {
        Letter letter = lettersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Letter does not exist with the given id: " + id));
        return lettersMapper.modelMapToLetterDto(letter);
    }

    @Override
    public List<LetterDto> getAllLetters() {
        List<Letter> letters = lettersRepository.findAll();
        return letters.stream()
                .map(lettersMapper::modelMapToLetterDto)
                .collect(Collectors.toList());
    }

    @Override
    public LetterDto updateLetter(String id, LetterDto letterDto) {

        Letter letter = lettersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Letter does not exist with the given id: " + id));
       
        letter.setIntroduction(letterDto.getIntroduction());
        letter.setBody(letterDto.getBody());
        letter.setBullets(letterDto.getBullets());
        letter.setEnd(letterDto.getEnd());
        letter.setName(letterDto.getName());

        Letter updatedLetter = lettersRepository.save(letter);

        return lettersMapper.modelMapToLetterDto(updatedLetter);
    }

    @Override
    public void deleteLetter(String id) {
        Letter letter = lettersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Letter does not exist with the given id: " + id));
        lettersRepository.deleteById(id);
    }

}
