package com.core.et.gigs.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.core.et.gigs.dto.UserDto;
import com.core.et.gigs.model.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UsersMapper {

    private ModelMapper modelMapper;

    public  UserDto modelMapToUserDto(User user) {
        UserDto userDto = modelMapper.map(user, UserDto.class);
        return userDto;
    }

    public  User modelMapToUser(UserDto userDto) {
        User user = modelMapper.map(userDto, User.class);
        return user;
    }

}
