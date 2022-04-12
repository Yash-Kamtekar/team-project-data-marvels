package com.example.backend.Controller;

import com.example.backend.Models.Hotels;
import com.example.backend.Repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/hotels")
public class HotelsController {

    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping
    public List<Hotels> getHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping(value = "/{hotelid}")
    public Optional<Hotels> getHotelByID(@RequestParam(value = "hotelid") Integer hotelid) {
        return hotelRepository.findById(hotelid);
    }

    @PostMapping
    public Hotels addHotel(@RequestBody Hotels hotel) {
        return hotelRepository.save(hotel);
    }

    @DeleteMapping
    public String deleteHotel(@RequestParam(value = "hotelid") Integer hotelid) {
        hotelRepository.deleteById(hotelid);
        return "Successfully deleted the hotel";
    }
}
