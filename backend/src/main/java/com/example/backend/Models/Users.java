package com.example.backend.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Users {
    @Id
    private Integer userid;

    private String username;

    private String email;

    private String phone;

    private Integer rewards;

}
