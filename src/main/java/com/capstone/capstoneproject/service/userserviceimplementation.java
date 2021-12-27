package com.capstone.capstoneproject.service;

import com.capstone.capstoneproject.model.UserDetail;
import com.capstone.capstoneproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userserviceimplementation implements userservice {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetail saveuserdetail(UserDetail userdetail) {
        return userRepository.save(userdetail);
    }
}
