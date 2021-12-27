package com.capstone.capstoneproject.controller;

import com.capstone.capstoneproject.model.NatureInsurance;
import com.capstone.capstoneproject.service.insuranceservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/NatureInsurance")
@CrossOrigin
public class InsuranceController {
    @Autowired
    private insuranceservice insuranceservice;

    @PostMapping("/add")
    public String add(@RequestBody NatureInsurance natureinsurance){
        insuranceservice.savenatureinsurance(natureinsurance);
        return "New user is added";
    }

}
