package com.dxc.shoppingcart.model;

import java.util.ArrayList;
import java.util.List;

public class Cart {
	private List<Product> products;

	public Cart() {
		this.products = new ArrayList<>();
	}

	// Method to add a product to the cart
	public void addProduct(Product product) {
		this.products.add(product);
	}

	// Method to remove a product from the cart
	public void removeProduct(Product product) {
		this.products.remove(product);
	}

	// Method to clear all products from the cart
	public void clearCart() {
		this.products.clear();
	}

	// Method to get all products in the cart
	public List<Product> getProducts() {
		return products;
	}

	// Method to calculate the total price of all products in the cart
	public double calculateTotalPrice() {
		double totalPrice = 0.0;
		for (Product product : products) {
			totalPrice += product.getPrice();
		}
		return totalPrice;
	}
}
