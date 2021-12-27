package com.capstone.capstoneproject.service;


import com.capstone.capstoneproject.model.IndividualVehicle;
import com.capstone.capstoneproject.repository.IndividualVehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IndividualVehicleserviceimplementation implements  IndividualVehicleservice{

    @Autowired
    private IndividualVehicleRepository individualvehicleRepository;

    @Override
    public IndividualVehicle saveindividualvehicle(IndividualVehicle individualvehicle){
        return individualvehicleRepository.save(individualvehicle);
    }

}
