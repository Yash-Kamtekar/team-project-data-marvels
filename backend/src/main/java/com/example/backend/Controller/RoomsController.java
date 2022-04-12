package com.example.backend.Controller;

import com.example.backend.Models.Rooms;
import com.example.backend.Repository.RoomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/rooms")
public class RoomsController {

    @Autowired
    private RoomsRepository roomsRepository;

    @GetMapping
    public List<Rooms> getAllRooms(){
        return roomsRepository.findAll();
    }

    @PostMapping
    public Rooms addRoom(@RequestBody Rooms room) {
        return roomsRepository.save(room);
    }

    @DeleteMapping
    public String deleteRoom(@RequestParam(value = "roomid") Integer roomid) {
        roomsRepository.deleteById(roomid);
        return "Successfully deleted the room";
    }
}
