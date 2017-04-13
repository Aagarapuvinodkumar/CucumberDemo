$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Demo feature file",
  "description": "",
  "id": "demo-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login functionality",
  "description": "",
  "id": "demo-feature-file;login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launched a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i entered the url in the WebBrowser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the Login page of my app should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.i_launched_a_browser()"
});
formatter.result({
  "duration": 3012874367,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.i_entered_the_url_in_the_WebBrowser()"
});
formatter.result({
  "duration": 3984495337,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.the_Login_page_of_my_app_should_be_displayed()"
});
formatter.result({
  "duration": 4009530224,
  "error_message": "java.lang.AssertionError: Title should contains MAX.\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.CucumberDemo.LoginPage.the_Login_page_of_my_app_should_be_displayed(LoginPage.java:36)\r\n\tat ✽.Then the Login page of my app should be displayed(Login.feature:8)\r\n",
  "status": "failed"
});
});