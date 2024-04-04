package com.dxc.shoppingcart.model;

public class Payment {
    

	private String paymentId;
    private String orderId; // Every payment to be Mapped with an order
    private PaymentMode paymentMode;
    private PaymentStatus paymentStatus;

    public Payment(String paymentId, String orderId, PaymentMode paymentMode, PaymentStatus paymentStatus) {
		super();
		this.paymentId = paymentId;
		this.orderId = orderId;
		this.paymentMode = paymentMode;
		this.paymentStatus = paymentStatus;
	}
    
    
    public enum PaymentMode {
        CREDIT_CARD,
        DEBIT_CARD,
        NET_BANKING,
        UPI,
        CASH_ON_DELIVERY
    }

    public enum PaymentStatus {
        FUNDS_LOCKED,
        FUNDS_UNLOCKED,
        PAYMENT_RECEIVED,
        PAYMENT_FAILED
    }


public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public PaymentMode getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(PaymentMode paymentMode) {
		this.paymentMode = paymentMode;
	}

	public PaymentStatus getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(PaymentStatus paymentStatus) {
		this.paymentStatus = paymentStatus;
	}



}