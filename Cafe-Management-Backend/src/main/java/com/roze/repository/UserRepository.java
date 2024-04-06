package com.roze.repository;

import com.roze.dto.UserDto;
import com.roze.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(@Param("email") String email);

    @Query("select new com.roze.dto.UserDto(u.id,u.name,u.email,u.contactNumber,u.status) from User u where u.role='user' ")
    List<UserDto> getAllUsers();
}
