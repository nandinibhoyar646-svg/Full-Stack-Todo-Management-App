package com.in28minutes.rest.webservices.demo.restful_web_services.hellowworld;

public class HelloWorldBean {
	private String message;

	public HelloWorldBean(String message) {
		this.setMessage(message);
	
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
