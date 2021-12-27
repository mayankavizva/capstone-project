package com.capstone.capstoneproject.controller;

import com.capstone.capstoneproject.model.Contact;
import com.capstone.capstoneproject.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/add")
    public String add(@RequestBody Contact contact){
        contactService.save(contact);
        return "Contact is added";
    }
}
