package com.dxc.shoppingcart.model;


public class Address {

	private int Floor_No;

	private String Apartment_Name;

	private String Street_Name;

	private int PinCode;
	

	public Address(int floor_No, String apartment_Name, String street_Name, int pinCode) {
		super();
		Floor_No = floor_No;
		Apartment_Name = apartment_Name;
		Street_Name = street_Name;
		PinCode = pinCode;
	}

	public int getFloor_No() {
		return Floor_No;
	}

	public void setFloor_No(int floor_No) {
		Floor_No = floor_No;
	}

	public String getApartment_Name() {
		return Apartment_Name;
	}

	public void setApartment_Name(String apartment_Name) {
		Apartment_Name = apartment_Name;
	}

	public String getStreet_Name() {
		return Street_Name;
	}

	public void setStreet_Name(String street_Name) {
		Street_Name = street_Name;
	}

	public int getPinCode() {
		return PinCode;
	}

	public void setPinCode(int pinCode) {
		PinCode = pinCode;
	}

	@Override
	public String toString() {
		return "Address [Floor_No=" + Floor_No + ", Apartment_Name=" + Apartment_Name + ", Street_Name=" + Street_Name
				+ ", PinCode=" + PinCode + "]";
	}

}
