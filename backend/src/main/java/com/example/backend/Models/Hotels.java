package com.example.backend.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Hotels {
    @Id
    private Integer hotelid;

    private String hotelname;

    private String Address;

    private String Country;

    private Float stars;
}
