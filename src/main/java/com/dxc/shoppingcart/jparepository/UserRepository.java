package com.dxc.shoppingcart.jparepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dxc.shoppingcart.model.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	User  findByUsername(String username);
	    User findByEmail(String email);
}
