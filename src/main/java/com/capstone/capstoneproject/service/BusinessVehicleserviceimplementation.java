package com.capstone.capstoneproject.service;


import com.capstone.capstoneproject.model.BusinessVehicle;
import com.capstone.capstoneproject.model.IndividualVehicle;
import com.capstone.capstoneproject.repository.BusinessVehicleRepository;
import com.capstone.capstoneproject.repository.IndividualVehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessVehicleserviceimplementation implements BusinessVehicleservice {

    @Autowired
    private BusinessVehicleRepository businessvehicleRepository;

    @Override
    public BusinessVehicle savebusinessvehicle(BusinessVehicle businessvehicle){
        return businessvehicleRepository.save(businessvehicle);
    }
}
