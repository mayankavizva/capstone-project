package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.ClaimVehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClaimRepository extends JpaRepository<ClaimVehicle , Integer> {
}
