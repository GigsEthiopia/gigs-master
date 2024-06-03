package com.core.et.gigs.service;

import com.core.et.gigs.dto.LoginDto;
import com.core.et.gigs.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
    
}
