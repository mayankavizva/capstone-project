package com.capstone.capstoneproject.service;

import com.capstone.capstoneproject.model.Exposure;
import com.capstone.capstoneproject.repository.ExposureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Exposureserviceimplementation implements ExposureService{

    @Autowired
    private ExposureRepository exposureRepository;

    @Override
    public Exposure save(Exposure exposure) {
        return exposureRepository.save(exposure);
    }
}
