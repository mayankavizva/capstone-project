package com.capstone.capstoneproject.service;

import com.capstone.capstoneproject.model.AdminEntity;
import com.capstone.capstoneproject.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public int findAdmin(AdminEntity adminEntity) {
        AdminEntity adminEntityObj= adminRepository.findByEmailAndPassword(adminEntity.getEmail(),adminEntity.getPassword());
        if(adminEntityObj!=null){
            return 1;
        }
        else {
            return 0;
        }
    }
}
