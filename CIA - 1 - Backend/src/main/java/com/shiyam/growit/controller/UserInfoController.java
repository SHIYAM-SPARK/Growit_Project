package com.shiyam.growit.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.shiyam.growit.model.User;
import com.shiyam.growit.model.UserInfo;
import com.shiyam.growit.repository.UserInfoRepository;
import com.shiyam.growit.repository.UserRepo;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/userinfo")
public class UserInfoController {

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private UserRepo userRepository;



    @PostMapping("/adddetails/{userId}")
    public ResponseEntity<UserInfo> addDetailsToUser(@PathVariable("userId") Long userId, @RequestBody UserInfo userInfo) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            userInfo.setUser(user);
            UserInfo savedUserInfo = userInfoRepository.save(userInfo);
            user.setUserInfo(savedUserInfo); // Set the saved UserInfo to the User
            userRepository.save(user); // Update the User entity with the UserInfo
            return new ResponseEntity<>(savedUserInfo, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/get/{userId}")
    public ResponseEntity<UserInfo> getUserInfoByUserId(@PathVariable("userId") long userId) {
        Optional<UserInfo> userInfoOptional = userInfoRepository.findById(userId);
        return userInfoOptional.map(userInfo -> new ResponseEntity<>(userInfo, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<UserInfo>> getAllUserInfo() {
        List<UserInfo> userInfos = userInfoRepository.findAll();
        return new ResponseEntity<>(userInfos, HttpStatus.OK);
    }
}