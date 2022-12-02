package com.GoTeam.demo.Models;

import javax.persistence.*;
import java.util.Collection;


@Entity
public class Matches {
    @Id
    @GeneratedValue

    private long id;

    private String location;
    private String date;
    private String skillLevel;
    private String time;

    @ManyToMany (mappedBy = "matches")
    private Collection <UserModel> users;

    public Collection<UserModel> getUsers() {
        return users;
    }

    public Matches(String location, String date, String skillLevel, String time) {
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

    public String getDate() {

        return date;
    }
    public String getSkillLevel() {
        return skillLevel;
    }

    public String getTime() {

        return time;
    }

    public long getId() {
        return id;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setSkillLevel(String skillLevel) {
        this.skillLevel = skillLevel;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setUsers(UserModel user) {
        users.add(user);
    }
}



