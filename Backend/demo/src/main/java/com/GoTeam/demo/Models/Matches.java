package com.GoTeam.demo.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Matches {
    @Id
    @GeneratedValue

    private long id;

    private String location;
    private int date;
    private String skillLevel;
    private int time;

    public Matches(String location, int date, String skillLevel, int time) {
        this.location = location;
        this.date = date;
        this.skillLevel = skillLevel;
        this.time = time;

    }

    public Matches() {

    }

    public String getLocation() {

        return location;
    }

    public int getDate() {

        return date;
    }
    public String getSkillLevel() {
        return skillLevel;
    }

    public int getTime() {

        return time;
    }

}



