package com.capstone.capstoneproject.controller;
import com.capstone.capstoneproject.model.AdminEntity;
import com.capstone.capstoneproject.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public int findAdmin(@RequestBody AdminEntity adminEntity){
        int a=  adminService.findAdmin(adminEntity);
        return a;
    }
}
