package com.capstone.capstoneproject.controller;


import com.capstone.capstoneproject.model.Exposure;
import com.capstone.capstoneproject.repository.ExposureRepository;
import com.capstone.capstoneproject.service.ExposureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Exposure")
@CrossOrigin
public class ExposureController {

    @Autowired
    private ExposureRepository exposureRepository;

    @Autowired
    private ExposureService exposureService;

    @PostMapping("/add")
    public String add(@RequestBody Exposure exposure){
        long a=exposure.getAmount();
        a=(long)(a*(0.7));
        exposure.setAmount(a);
        exposureService.save(exposure);
        return "Exposure";
    }

    @GetMapping("/get")
    public List<Exposure> get(){
        return exposureRepository.findAll();
    }
}
