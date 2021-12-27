package com.capstone.capstoneproject.repository;

import com.capstone.capstoneproject.model.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDetail,Integer> {

}
