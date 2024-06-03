package com.core.et.gigs.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CustomeCorsConfiguration {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Allow requests from the specified origin
        config.addAllowedOrigin("http://127.0.0.1:3000");

        // You can add more origins or use "*" to allow requests from any origin.
        // config.addAllowedOrigin("*");

        config.addAllowedHeader("*"); // Allow all headers
        config.addAllowedMethod("*"); // Allow all HTTP methods (GET, POST, PUT, etc.)

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
