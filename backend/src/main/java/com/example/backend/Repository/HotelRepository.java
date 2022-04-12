package com.example.backend.Repository;

import com.example.backend.Models.Hotels;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotels, Integer> {
}
