package com.capstone.capstoneproject.model;

import javax.persistence.*;

@Entity
public class NatureInsurance {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String first;

    @OneToOne
    private UserDetail userdetail;

    @OneToOne
    private IndividualVehicle individualvehicle;

    @OneToOne
    private Business business;

    public NatureInsurance() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }
}
