package com.shiyam.growit.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.shiyam.growit.model.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    
}