package com.dxc.shoppingcart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dxc.shoppingcart.jparepository.UserRepository;
import com.dxc.shoppingcart.model.User;

@SpringBootApplication
public class ShoppingcartApplication {

	@Autowired
public static UserRepository repo;
	
	public static void main(String[] args) {
		SpringApplication.run(ShoppingcartApplication.class, args);
		
//		User user1= new User( "Ron", "dummy123"," catstreet653",  763292222L,"sas@gmail.com");
//		User user2= new User( "Ron", "dummy123"," catstreet653",  763292222L,"sas@gmail.com");
//		
//
//			repo.save(user1);
//			repo.save(user2);
//			
//		}
		
	}
}


