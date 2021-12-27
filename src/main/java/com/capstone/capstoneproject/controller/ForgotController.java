package com.capstone.capstoneproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Random;

@Controller
public class ForgotController {

    Random random=new Random(100000);

    @RequestMapping("/forgot")
    public String openEmailForm(){
        return "forgot_Email_form";
    }

    @PostMapping("/SendOtp")
    public String sendOtp(@RequestParam("email") String email){
     System.out.println("Email "+email);
     int otp=random.nextInt(999999);

     System.out.println("OTP "+otp);
     return "verify otp";
    }
}
