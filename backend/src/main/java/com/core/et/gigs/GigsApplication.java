package com.core.et.gigs;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.core.et.gigs.repository.UsersRepository;



@SpringBootApplication
public class GigsApplication {

  @Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

  @Autowired
  UsersRepository usersRepository;

  public static void main(String[] args) {
    SpringApplication.run(GigsApplication.class, args);
  }

}


