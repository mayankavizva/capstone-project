package com.capstone.capstoneproject.controller;


import com.capstone.capstoneproject.model.ClaimVehicle;

import com.capstone.capstoneproject.service.Claimservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Claim")
@CrossOrigin
public class ClaimController {

    @Autowired
    private Claimservice claimservice;

    @PostMapping("/add")
    public String add(@RequestBody ClaimVehicle claimvehicle){
        claimservice.saveclaimvehicle(claimvehicle);
        return "New Claim is Added";
    }
}
