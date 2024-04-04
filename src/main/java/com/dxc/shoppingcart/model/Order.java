package com.dxc.shoppingcart.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name="Ordertable")
public class Order {
	@Id
    private String orderId;
	@Column
    private Date orderDate;
  
	
	private List<OrderProduct> orderProducts;
    private OrderStatus status;
    
    public enum OrderStatus {
        ORDER_PLACED,
        SHIPPED,
        DELIVERED,
        RETURNED,
        CANCELLED
    }

    public Order(String orderId) {
        this.orderId = orderId;
        this.orderDate = new Date();
        this.orderProducts = new ArrayList<>();
        this.status = OrderStatus.ORDER_PLACED; // Default status
    }

    // Getters and setters
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

   public List<OrderProduct> getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(List<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
//
//    // Method to add a product to the order
//    public void addProduct(OrderProduct product) {
//        this.orderProducts.add(product);
//    }
//
//    // Method to remove a product from the order
//    public void removeProduct(OrderProduct product) {
//        this.orderProducts.remove(product);
//    }
//
//    // Method to clear all products from the order
//    public void clearOrderProducts() {
//        this.orderProducts.clear();
//    }
//   

}
