package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.RegistrationDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RegistrationRepository extends JpaRepository<RegistrationDetail , Integer> {

    public RegistrationDetail findByEmail(String email);

//    @Query(value="select id from login where email=:e and password=:p ",nativeQuery = true)
    public RegistrationDetail findByEmailAndPassword(String email , String Password);




}
