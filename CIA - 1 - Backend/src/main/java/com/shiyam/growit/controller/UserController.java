package com.shiyam.growit.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.shiyam.growit.exception.UserNotFoundException;
import com.shiyam.growit.model.User;
import com.shiyam.growit.repository.UserRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController
{
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/register")
    public User newUser(@RequestBody User newUser)
    {
        return userRepo.save(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {
        User user = userRepo.findByEmail(loginRequest.getEmail());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful"+"["+user.getName()+","+user.getId()+"]");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
}
}

    // @GetMapping("/users")
    // public List<User> getAllUsers()
    // {
    //     return userRepo.findAll();
    // }

    @GetMapping("/users")
    public ResponseEntity<Page<User>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy) {
        Page<User> users = userRepo.findAll(PageRequest.of(page, size, Sort.by(sortBy)));
        return ResponseEntity.ok(users);
            }
        


            @GetMapping("/sortByCity")
            public ResponseEntity<Page<User>> getUsersSortedByCity(
                    @RequestParam(defaultValue = "0") int page,
                    @RequestParam(defaultValue = "10") int size) {
                Page<User> users = userRepo.findAllSortedByCityName(PageRequest.of(page, size));
                return ResponseEntity.ok(users);
            }

            @GetMapping("/sortByName")
            public ResponseEntity<Page<User>> getUsersSortedByName(
                    @RequestParam(defaultValue = "0") int page,
                    @RequestParam(defaultValue = "10") int size) {
                Page<User> users = userRepo.findAllSortedByName(PageRequest.of(page, size));
                return ResponseEntity.ok(users);
            }
            
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepo.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepo.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "user with id "+id+" has been deleted success.";
    }
    @PatchMapping("/user/{id}")
    public ResponseEntity<User> patchUser(@RequestBody User partialUser, @PathVariable Long id) {
        return userRepo.findById(id)
                .map(user -> {
                    if (partialUser.getName() != null) {
                        user.setName(partialUser.getName());
                    }
                    if (partialUser.getEmail() != null) {
                        user.setEmail(partialUser.getEmail());
                    }
                    if (partialUser.getPassword() != null) {
                        user.setPassword(partialUser.getPassword());
                    }
                    return ResponseEntity.ok(userRepo.save(user));
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
}
