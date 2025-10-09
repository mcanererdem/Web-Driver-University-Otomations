Feature: www.WebdriverUniversity.com - Login Portal Page

    Background: Preconditions
        Given Navigate to the WebdriverUniversity homepage
        When I click the login portal button
        And I switch to new tab

    Scenario: Valid Login Portal Submission
        And I type a username "webdriver"
        And I type a password "webdriver123"
        And I click on login button
        Then I should presented with login successful message


    Scenario: Invalid Login Portal Submission
        And I type a username "webdriver"
        And I type a password "webdriver1234"
        And I click on login button
        Then I should presented with login unsuccessful message
