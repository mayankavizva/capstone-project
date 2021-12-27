package com.capstone.capstoneproject.model;

import javax.persistence.*;

@Entity
@Table(name="login")
public class RegistrationDetail {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String number;
    private String email;
    private String password;

    public RegistrationDetail() {
    }

    public RegistrationDetail(int id , String firstName , String lastName , String number , String email , String password) {
       this.id=id;
       this.firstName=firstName;
       this.lastName=lastName;
       this.number=number;
       this.email=email;
        this.password = password;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
