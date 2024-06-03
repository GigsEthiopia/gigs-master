package com.core.et.gigs.service.implementation;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.core.et.gigs.dto.UserDto;
import com.core.et.gigs.exception.ResourceNotFoundException;
import com.core.et.gigs.mapper.UsersMapper;
import com.core.et.gigs.model.Key;
import com.core.et.gigs.model.Role;
import com.core.et.gigs.model.User;
import com.core.et.gigs.repository.KeysRepository;
import com.core.et.gigs.repository.RolesRepository;
import com.core.et.gigs.repository.UsersRepository;
import com.core.et.gigs.service.UsersService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class UserServiceImplementation implements UsersService {

    private UsersRepository usersRepository;
    private KeysRepository keyRepository;
    private RolesRepository roleRepository;
    private UsersMapper usersMapper;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = usersMapper.modelMapToUser(userDto);

        
        // Retrieve the default role with name USER from the database
        Set<Role> roles = new HashSet<>();
        Role defaultRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new ResourceNotFoundException("Role is not found"));

        log.info("CREATE USER NAME: {}", defaultRole.getName());
        roles.add(defaultRole);

        // Create and save the key with the default role
        Key key = new Key();
        key.setEmail(user.getEmail());
 

        key.setRole(roles);
        Key savedKey = keyRepository.save(key);

        // Set the created key in the user object
        user.setKeys(savedKey);
        User savedUser = usersRepository.save(user);

        return usersMapper.modelMapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserByID(String uuid) {
        User user = usersRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the given id: " + uuid));
        return usersMapper.modelMapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = usersRepository.findAll();
        return users.stream()
                .map(usersMapper::modelMapToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(String uuid, UserDto userDto) {

        User user = usersRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the given id: " + uuid));
        user.setEmail(userDto.getEmail());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setPassword(userDto.getPassword());
        user.setUsername(userDto.getUsername());
        user.setUuid(userDto.getUuid());
        user.setVerified(userDto.getVerified());

        User updatedUser = usersRepository.save(user);

        return usersMapper.modelMapToUserDto(updatedUser);

    }

    @Override
    public void deleteUser(String uuid) {
        User user = usersRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the given id: " + uuid));
        usersRepository.deleteById(uuid);
    }

}
