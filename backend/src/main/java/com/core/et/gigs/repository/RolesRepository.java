package com.core.et.gigs.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.core.et.gigs.model.Role;


public interface RolesRepository extends MongoRepository<Role, String> {
    @Query("{name: ?0}")
    Optional<Role> findByName(String name);
}
