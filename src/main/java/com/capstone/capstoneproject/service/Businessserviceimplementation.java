package com.capstone.capstoneproject.service;


import com.capstone.capstoneproject.model.Business;
import com.capstone.capstoneproject.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Businessserviceimplementation implements Businessservice{

    @Autowired
    private BusinessRepository businessRepository;

    @Override
    public Business savebusiness(Business business){
        return businessRepository.save(business);
    }
}
