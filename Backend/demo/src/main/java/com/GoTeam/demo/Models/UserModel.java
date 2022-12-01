package com.GoTeam.demo.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Arrays;
import java.util.Collection;
import java.util.UUID;

@Entity
public class UserModel {
    @Id
    @GeneratedValue
    private UUID id;

    @NotBlank(message = "Email is mandatory")
    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE)
    @Column(unique = true)
    private String email;
    @NotBlank(message = "Password is mandatory")
    private String password;
    @NotBlank(message = "First Name is mandatory")
    private String firstName;
    @NotBlank(message = "Last Name is mandatory")
    private String lastName;
    @NotBlank(message = "Skill Level is mandatory")
    private String skillLevel;
    @NotBlank(message = "City is mandatory")
    private String city;

    @ManyToMany
    @JsonIgnore
    private Collection<Matches> matches;

    public UserModel() {
    }

    public UserModel(String email, String password, String firstName, String lastName, String skillLevel, String city, Matches... matches) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.skillLevel = skillLevel;
        this.city = city;
        this.matches = Arrays.asList(matches);
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getSkillLevel() {
        return skillLevel;
    }

    public String getCity() {
        return city;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setSkillLevel(String skillLevel) {
        this.skillLevel = skillLevel;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Collection<Matches> getMatches() {
        return matches;
    }

    public void setMatches(Matches match) {
        matches.add(match);
    }
}
