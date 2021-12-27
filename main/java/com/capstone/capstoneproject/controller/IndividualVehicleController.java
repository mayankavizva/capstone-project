package com.capstone.capstoneproject.controller;


import com.capstone.capstoneproject.model.IndividualVehicle;
import com.capstone.capstoneproject.service.IndividualVehicleservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/IndividualVehicleDetails")
@CrossOrigin
public class IndividualVehicleController {

    @Autowired
    private IndividualVehicleservice individualvehicleservice;

    @PostMapping("/add")
    public IndividualVehicle add(@RequestBody IndividualVehicle individualvehicle){
        int a;
        if(individualvehicle.getPurchaseA()<1000000){
            a=1000;
        }
        else{
            a=2000;
        }
        if(individualvehicle.getFuel().equals("DIESEL")){
            a= (int) (a+a*0.02);
        }
        else if(individualvehicle.getFuel().equals("CNG")){
            a=(int)(a+a*0.04);
        }
        individualvehicle.setPremium((long) (a+2072));
        System.out.println(individualvehicle.getPremium());
        IndividualVehicle individualVehicle=individualvehicleservice.saveindividualvehicle(individualvehicle);
        return individualVehicle;
    }
}
