package com.dxc.shoppingcart.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name = "User_Table")
public class User {


	@GeneratedValue
	@Id
	private long UserId;
	
	
	@Column(name="username")
	private String UserName;
	
	@Column(name="address")
	public String address;

	@Column(name="password")
	public String Password;
	
	@Column(name="phonenumber")
	public long PhoneNumber;
	
	
	@Column(name="Email",unique =true)
	public String Email;
	
	public User( String userName, String address, String password, long phone_Number, String email) {
		super();
	
		UserName = userName;
		this.address = address;
		Password = password;
		this.PhoneNumber = PhoneNumber;
		Email = email;
	}

	public long getUserId() {
		return UserId;
	}



	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public long getPhoneNumber() {
		return PhoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		PhoneNumber = phoneNumber;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	@Override
	public String toString() {
		return "User [UserId=" + UserId + ", UserName=" + UserName + ", address=" + address + ", Password=" + Password
				+ ", PhoneNumber=" + PhoneNumber + ", Email=" + Email + "]";
	}
	
	

}
