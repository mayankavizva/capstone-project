package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminEntity, Integer>{
    public AdminEntity findByEmailAndPassword(String email, String password);
}
