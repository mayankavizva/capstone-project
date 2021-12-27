package com.capstone.capstoneproject.controller;

import com.capstone.capstoneproject.model.BusinessVehicle;
import com.capstone.capstoneproject.model.IndividualVehicle;
import com.capstone.capstoneproject.service.BusinessVehicleservice;
import com.capstone.capstoneproject.service.IndividualVehicleservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/BusinessVehicleDetails")
@CrossOrigin
public class BusinessVehicleController {

    @Autowired
    private BusinessVehicleservice businessvehicleservice;

    @PostMapping("/add")
    public BusinessVehicle add(@RequestBody BusinessVehicle businessvehicle){
        int a;
        if(businessvehicle.getPurchaseA()<1000000){
            a=1000;
        }
        else{
            a=2000;
        }
        if(businessvehicle.getFuel().equals("DIESEL")){
            a= (int) (a+a*0.02);
        }
        else if(businessvehicle.getFuel().equals("CNG")){
            a=(int)(a+a*0.04);
        }
        businessvehicle.setPremium((long) (a));
        System.out.println(businessvehicle.getPremium());
        BusinessVehicle businessVehicle=businessvehicleservice.savebusinessvehicle(businessvehicle);
        return businessVehicle;
    }

}
