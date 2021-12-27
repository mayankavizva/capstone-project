package com.capstone.capstoneproject.service;

import com.capstone.capstoneproject.model.Premium;
import com.capstone.capstoneproject.repository.PremiumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Premiumserviceimplementation implements PremiumService{

    @Autowired
    private PremiumRepository premiumRepository;

    @Override
    public Premium save(Premium premium) {

        return premiumRepository.save(premium);
    }

    @Override
    public Premium find(Premium premium) {
        Premium prem=premiumRepository.findByEmail(premium.getEmail());
        return prem;
    }
}
