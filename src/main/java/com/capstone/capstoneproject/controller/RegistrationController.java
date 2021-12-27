package com.capstone.capstoneproject.controller;


import com.capstone.capstoneproject.form.Changepassword;
import com.capstone.capstoneproject.model.RegistrationDetail;
import com.capstone.capstoneproject.repository.RegistrationRepository;
import com.capstone.capstoneproject.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/registration")
@CrossOrigin
public class RegistrationController {

    @Autowired
    private RegistrationService registrationservice;



    @PostMapping("/add")
    public int add(@RequestBody RegistrationDetail registrationdetail ) throws Exception {
        System.out.println(registrationdetail.getId());
        registrationservice.saveregistrationdetail(registrationdetail);
//        registrationservice.saveuser(user);
        return registrationdetail.getId();
    }

    @PostMapping("/login")
    public int login(@RequestBody RegistrationDetail registrationdetail ) throws Exception {
//        System.out.println(registrationdetail.getId());
        int a=registrationservice.getregistrationdetail(registrationdetail);
//        registrationservice.saveuser(user);

        return a;

    }

    @PostMapping("/email")
    public RegistrationDetail email(@RequestBody RegistrationDetail registrationdetail ) throws Exception {
        RegistrationDetail user=registrationservice.emailregistrationdetail(registrationdetail);
//
        return user;
    }

    @PutMapping("/update")
    public int update(@RequestBody Changepassword changepassword) throws Exception{
       return registrationservice.update(changepassword);
    }

}
