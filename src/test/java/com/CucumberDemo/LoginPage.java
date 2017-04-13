package com.CucumberDemo;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

public class LoginPage {
	WebDriver driver;
	@Given("^I launched a browser$")
	public void i_launched_a_browser(){
		System.setProperty("webdriver.chrome.driver", "C:\\VinodKumarAagarapu\\SeleniumRelated\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
	}

	@When("^i entered the url in the WebBrowser$")
	public void i_entered_the_url_in_the_WebBrowser(){
		driver.get("https://max-e2e.centurylink.com/mtspWeb/");
	}

	@Then("^the Login page of my app should be displayed$")
	public void the_Login_page_of_my_app_should_be_displayed() throws InterruptedException {
		String maxTitle = driver.getTitle().trim();
		Thread.sleep(4000);
		System.out.println("djhfjkhkdhfhdks:"+maxTitle);
		Assert.assertTrue("Title should contains MAX.",maxTitle.contains("MAX".toLowerCase()));
		/*if(maxTitle.contains("MAX")){
			System.out.println("Login page displayed");			
		}else{
			System.err.println("Problem in displaying login page");
		}*/
	}
}
