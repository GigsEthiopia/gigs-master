package com.core.et.gigs.service;

import java.util.List;

import com.core.et.gigs.dto.UserDto;


public interface UsersService {

    UserDto createUser(UserDto userDto);

    UserDto getUserByID(String uuid);

    List<UserDto> getAllUsers(); 

    UserDto updateUser(String id, UserDto userDto);

    void deleteUser(String id);
    
}
