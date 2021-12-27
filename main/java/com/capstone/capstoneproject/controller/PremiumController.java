package com.capstone.capstoneproject.controller;



import com.capstone.capstoneproject.model.Premium;
import com.capstone.capstoneproject.repository.PremiumRepository;
import com.capstone.capstoneproject.service.PremiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/premium")
@CrossOrigin
public class PremiumController {

    @Autowired
    private PremiumRepository premiumRepository;

@Autowired
    private PremiumService premiumService;

@PostMapping("/add")
    public String add(@RequestBody Premium premium){
    premiumService.save(premium);
    return "User take Premium";
}

@GetMapping("/get")
    public List<Premium> get(){
     return premiumRepository.findAll();
}

@PostMapping("/email")
    public Premium get(@RequestBody Premium premium){
    Premium data=premiumService.find(premium);
    System.out.println(data);
    return data;
}



}
