package com.capstone.capstoneproject.service;


import com.capstone.capstoneproject.model.NatureInsurance;
import com.capstone.capstoneproject.repository.InsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class insuranceserviceimplementation implements insuranceservice{

    @Autowired
   private InsuranceRepository insuranceRepository;

    @Override
    public NatureInsurance savenatureinsurance(NatureInsurance natureinsurance){
        return insuranceRepository.save(natureinsurance);
    }
}
