package com.capstone.capstoneproject.controller;


import com.capstone.capstoneproject.model.Business;
import com.capstone.capstoneproject.service.Businessservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Business")
@CrossOrigin
public class BusinessController {

    @Autowired
    private Businessservice businessservice;

    @PostMapping("/add")
    public String add(@RequestBody Business business){
        businessservice.savebusiness(business);
        return "New Business is Added";
    }
}
