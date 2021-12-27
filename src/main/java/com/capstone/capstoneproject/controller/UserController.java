package com.capstone.capstoneproject.controller;


import com.capstone.capstoneproject.model.UserDetail;
import com.capstone.capstoneproject.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/getaquote")
@CrossOrigin
public class UserController {
    @Autowired
    private userservice userservice;

    @PostMapping("/add")
    public String add(@RequestBody UserDetail userdetail){
        userservice.saveuserdetail(userdetail);
        return "New user is added";
    }

}
