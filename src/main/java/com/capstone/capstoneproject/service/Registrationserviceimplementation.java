package com.capstone.capstoneproject.service;


import com.capstone.capstoneproject.form.Changepassword;
import com.capstone.capstoneproject.model.RegistrationDetail;
import com.capstone.capstoneproject.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Registrationserviceimplementation implements RegistrationService{


    private List<RegistrationDetail> reg=new ArrayList<>();

    @Autowired
    private RegistrationRepository registrationrepository;

    @Override
    public RegistrationDetail saveregistrationdetail(RegistrationDetail registrationdetail) throws Exception {
        RegistrationDetail user=registrationrepository.findByEmail(registrationdetail.getEmail());
   if(user!=null){

       return user;

   }
   else{
       reg.add(registrationdetail);
       return registrationrepository.save(registrationdetail);
   }

    }

    @Override
    public int getregistrationdetail(RegistrationDetail registrationdetail) throws Exception {
        RegistrationDetail user=registrationrepository.findByEmailAndPassword(registrationdetail.getEmail() , registrationdetail.getPassword());
        System.out.println("User Details    "+user);
        if(user==null){

            return 0;

        }
        else{
            return 1;
        }

    }

    @Override
    public RegistrationDetail emailregistrationdetail(RegistrationDetail registrationdetail) throws Exception {
        RegistrationDetail user=registrationrepository.findByEmail(registrationdetail.getEmail());
        System.out.println(user);
        if(user!=null){


            return user;
        }
        else{
            return null;
        }
    }


    @Override
    public int update(Changepassword changepassword) throws Exception {
        RegistrationDetail existreg=registrationrepository.findByEmail(changepassword.getEmail());
        if(existreg!=null) {
            existreg.setPassword(changepassword.getPassword());
            registrationrepository.save(existreg);
            return 1;
        }
        else{
            return 0;
        }

    }
}
