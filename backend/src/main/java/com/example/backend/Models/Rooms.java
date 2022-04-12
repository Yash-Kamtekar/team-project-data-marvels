package com.example.backend.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Rooms {
    @Id
    private Integer roomid;

    private Integer hotelid;

    private Integer roomtypeid;

    private Float roomprice;
}
