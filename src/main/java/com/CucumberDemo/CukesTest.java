package com.CucumberDemo;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="./src/test/resources/",tags={"@regression"},plugin = {"html:target/Reports/cucumber-report.html"})
public class CukesTest 
{
    
}
