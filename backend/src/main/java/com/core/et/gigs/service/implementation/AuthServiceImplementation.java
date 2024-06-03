package com.core.et.gigs.service.implementation;

import java.util.HashSet;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.core.et.gigs.dto.LoginDto;
import com.core.et.gigs.dto.RegisterDto;
import com.core.et.gigs.exception.APIException;
import com.core.et.gigs.exception.ResourceNotFoundException;
import com.core.et.gigs.model.Key;
import com.core.et.gigs.model.Role;
import com.core.et.gigs.model.User;
import com.core.et.gigs.repository.KeysRepository;
import com.core.et.gigs.repository.RolesRepository;
import com.core.et.gigs.repository.UsersRepository;
import com.core.et.gigs.security.JwtTokenProvider;
import com.core.et.gigs.service.AuthService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class AuthServiceImplementation implements AuthService {

    private UsersRepository usersRepository;
    private RolesRepository roleRepository;
    private KeysRepository keysRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public String register(RegisterDto registerDto) {

        log.info("USER NAME: {}", registerDto.getUsername());
        // check username is already exists in database
        if (usersRepository.existsByUsername(registerDto.getUsername())) {
            throw new APIException(HttpStatus.BAD_REQUEST, "Username already exists!");
        }

        // check email is already exists in database
        if (usersRepository.existsByEmail(registerDto.getEmail())) {
            throw new APIException(HttpStatus.BAD_REQUEST, "Email is already exists!");
        }

        User user = new User();

        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        // Retrieve the default role with name USER from the database
        Set<Role> roles = new HashSet<>();
        Role defaultRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new ResourceNotFoundException("Role is not found"));

        log.info("ROLE NAME: {}", defaultRole.getName());
        roles.add(defaultRole);

        // Create and save the key with the default role
        Key key = new Key();
        key.setEmail(user.getEmail());
        key.setRole(roles);
        Key savedKey = keysRepository.save(key);

        // Set the created key in the user object
        user.setKeys(savedKey);

        usersRepository.save(user);

        return "User registered successfully!";
    }

    @Override
    public String login(LoginDto loginDto) {

        Authentication authentication = authenticationManager
                .authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginDto.getUsernameOrEmail(),
                                loginDto.getPassword()
            ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }

}
