package com.capstone.capstoneproject.service;

import com.capstone.capstoneproject.form.Changepassword;
import com.capstone.capstoneproject.model.RegistrationDetail;

public interface RegistrationService {

    public RegistrationDetail saveregistrationdetail(RegistrationDetail registrationdetail) throws Exception;

    public int getregistrationdetail(RegistrationDetail registrationdetail) throws Exception;

    public RegistrationDetail emailregistrationdetail(RegistrationDetail registrationdetail) throws Exception;

    public int update(Changepassword changepassword) throws Exception;



}
