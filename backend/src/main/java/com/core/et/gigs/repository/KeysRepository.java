package com.core.et.gigs.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.core.et.gigs.model.Key;

public interface KeysRepository extends MongoRepository<Key, String> {
}
