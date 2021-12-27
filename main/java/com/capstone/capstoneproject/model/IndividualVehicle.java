package com.capstone.capstoneproject.model;

import javax.persistence.*;

@Entity
public class IndividualVehicle {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String registration;
    private  String state;
    private String vehicle;
    private String fuel;
    private String capacity;
    private String purchaseD;
    private Long purchaseA;
    private Long premium;

    @OneToOne
    private NatureInsurance natureinsurance;

    public IndividualVehicle() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }



    public String getPurchaseD() {
        return purchaseD;
    }

    public void setPurchaseD(String purchaseD) {
        this.purchaseD = purchaseD;
    }

    public Long getPurchaseA() {
        return purchaseA;
    }

    public void setPurchaseA(Long purchaseA) {
        this.purchaseA = purchaseA;
    }
    public void setPremium(Long premium){
        this.premium= premium;
    }
    public Long getPremium(){
        return premium;
    }
}
