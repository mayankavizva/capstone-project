package com.capstone.capstoneproject.form;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Changepassword {
    private String email;
    private  String password;

}
