package com.capstone.capstoneproject.service;

import com.capstone.capstoneproject.model.Contact;
import com.capstone.capstoneproject.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactserviceImplementation implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }
}
