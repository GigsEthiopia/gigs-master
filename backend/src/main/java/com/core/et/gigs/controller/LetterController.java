package com.core.et.gigs.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.core.et.gigs.dto.LetterDto;
import com.core.et.gigs.service.LetterService;

import lombok.AllArgsConstructor;


@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/letter")
public class LetterController {

    private LetterService letterService;

    @PostMapping
    public ResponseEntity<LetterDto> createLetter(@RequestBody LetterDto letterDto){
       LetterDto savedLetter =  letterService.createLetter(letterDto);
       return new ResponseEntity<LetterDto>(savedLetter, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<LetterDto> getLetterById(@PathVariable("id") String id){
        LetterDto letterDto = letterService.getLetterByID(id);
        return ResponseEntity.ok(letterDto);
    }

    @GetMapping
    public ResponseEntity<List<LetterDto>> getAllLetters(){
        List<LetterDto> letters = letterService.getAllLetters();
        return ResponseEntity.ok(letters);
    }

    @PutMapping("{id}")
    public ResponseEntity<LetterDto> updateLetter(@PathVariable("id") String id, @RequestBody LetterDto upatedLetter){
        LetterDto letterDto = letterService.updateLetter(id, upatedLetter);
        return ResponseEntity.ok(letterDto);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLetter(@PathVariable("id") String id){
        letterService.deleteLetter(id);
        return ResponseEntity.ok("Letter deleted Successfully");
    }
    
}
