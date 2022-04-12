package com.example.backend.Controller;

import com.example.backend.Models.Users;
import com.example.backend.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/users")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping
    public List<Users> getAllUsers(){
        return usersRepository.findAll();
    }

    @GetMapping("/{userid}")
    public Optional<Users> getUserById(@RequestParam(value = "userid") Integer userid){
        Optional<Users> users = usersRepository.findById(userid);
        return users;
    }

    @PostMapping
    public Users addUser(@RequestBody Users user) {
        return usersRepository.save(user);
    }

    @DeleteMapping("/{userid}")
    public String deleteUserById(@RequestParam(value = "userid") Integer userid){
        usersRepository.deleteById(userid);
        return "User got deleted successfully";
    }
}
