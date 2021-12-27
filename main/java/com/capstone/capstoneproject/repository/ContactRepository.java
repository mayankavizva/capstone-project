package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ContactRepository extends JpaRepository<Contact ,Integer> {
}
