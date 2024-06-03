package com.core.et.gigs.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordEncoderImplementation {

    public static void notmain(String[] args) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        System.out.println(passwordEncoder.encode("ramesh"));

        System.out.println(passwordEncoder.encode("admin"));
    }
}