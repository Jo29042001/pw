package com.dxc.shoppingcart.service;


import com.dxc.shoppingcart.jparepository.UserRepository;
import com.dxc.shoppingcart.model.User;


public class UserService {

	public UserService() {}

	
	private UserRepository userRepository;

	public void registerUser(User user) {
		// Validate username and email uniqueness
		if (userRepository.findByUsername(user.getUserName()) != null) {
			throw new RuntimeException("Username already exists");
		}
		if (userRepository.findByEmail(user.getEmail()) != null) {
			throw new RuntimeException("Email already registered");
		}

		// Encode password before saving
		user.setPassword(user.getPassword());

		// Save user to database
		userRepository.save(user);
	}

}
