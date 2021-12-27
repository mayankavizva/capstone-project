package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.Premium;
import com.capstone.capstoneproject.model.RegistrationDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PremiumRepository extends JpaRepository<Premium , Integer> {

    public Premium findByEmail(String email);

//    Optional<Premium> findByEmail();
}
