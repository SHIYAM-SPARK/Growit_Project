package com.shiyam.growit.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.shiyam.growit.model.User;

public interface UserRepo  extends JpaRepository<User,Long>
{
    User findByEmail(String username);
    Page<User> findAll(Pageable pageable);

     
    @Query("SELECT u FROM User u JOIN u.userInfo ui ORDER BY ui.city ASC") 
    Page<User> findAllSortedByCityName(Pageable pageable);

    @Query("SELECT u FROM User u ORDER BY u.name ASC") 
    Page<User> findAllSortedByName(Pageable pageable);

}
