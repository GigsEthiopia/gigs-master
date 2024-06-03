package com.core.et.gigs.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.core.et.gigs.model.Letter;

public interface LettersRepository extends MongoRepository<Letter, String>{

    @Query("{id: ?0}")
    Optional<Letter> findById(String id);
    
}
