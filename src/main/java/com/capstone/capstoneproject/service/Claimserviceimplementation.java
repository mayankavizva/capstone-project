package com.capstone.capstoneproject.service;


import com.capstone.capstoneproject.model.ClaimVehicle;
import com.capstone.capstoneproject.repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Claimserviceimplementation implements  Claimservice{

    @Autowired
    private ClaimRepository claimrepository;

    @Override
    public ClaimVehicle saveclaimvehicle(ClaimVehicle claimvehicle) {
        return claimrepository.save(claimvehicle);
    }
}
