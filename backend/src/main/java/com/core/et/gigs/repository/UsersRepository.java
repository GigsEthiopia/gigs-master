package com.core.et.gigs.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ExistsQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.core.et.gigs.model.User;

public interface UsersRepository extends MongoRepository<User, String>{

    @Query("{username: ?0}")
    Optional<User> findByUsername(String username);

    @ExistsQuery("{email: ?0}")
    Boolean existsByEmail(String email);

    @Query("{ $or: [ { 'username': ?0 }, { 'email': ?1 } ] }")
    Optional<User> findByUsernameOrEmail(String username, String email);

    @ExistsQuery("{username: ?0}")
    Boolean existsByUsername(String username);

    @ExistsQuery("{ $or: [ { 'username': ?0 }, { 'email': ?1 } ] }")
    Boolean existsByUsernameOrEmail(String username, String email);

    
}