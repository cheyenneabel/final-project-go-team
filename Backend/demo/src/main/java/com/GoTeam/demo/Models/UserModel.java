package com.GoTeam.demo.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class UserModel {
    @Id
    @GeneratedValue
    UUID id;

    String firstName, lastName;
}
