package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.NatureInsurance;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InsuranceRepository extends JpaRepository<NatureInsurance,Integer> {
}
