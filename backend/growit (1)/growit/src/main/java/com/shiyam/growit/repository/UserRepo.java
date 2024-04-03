package com.shiyam.growit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiyam.growit.model.User;

public interface UserRepo  extends JpaRepository<User,Long>
{
    User findByEmail(String username);
}
