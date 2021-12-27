package com.capstone.capstoneproject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ClaimVehicle {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private int policy;
    private String name;
    private String email;
    private String mobile;
    private String risk;
    private String destroyed;
    private String description;
    private String place;
    private long premium;
    private long claim;

    public ClaimVehicle() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPolicy() {
        return policy;
    }

    public void setPolicy(int policy) {
        this.policy = policy;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getRisk() {
        return risk;
    }

    public void setRisk(String risk) {
        this.risk = risk;
    }

    public String getDestroyed() {
        return destroyed;
    }

    public void setDestroyed(String destroyed) {
        this.destroyed = destroyed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public long getPremium() {
        return premium;
    }

    public void setPremium(long premium) {
        this.premium = premium;
    }

    public long getClaim() {
        return claim;
    }

    public void setClaim(long claim) {
        this.claim = claim;
    }
}
