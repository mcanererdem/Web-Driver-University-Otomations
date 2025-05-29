Feature: www.WebdriverUniversity.com - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given Navigate to the WebdriverUniversity homepage
        When I click the contact us button
        And I switch to new tab
        And I type a first name
        And I type a last name
        And I type an email
        And I type a comment
        And I click on submit button
        Then I should presented with contact us successful message

    Scenario: Invalid Contact Us Form Submission With Empty Lastname
        Given Navigate to the WebdriverUniversity homepage
        When I click the contact us button
        And I switch to new tab
        And I type a first name
        #And I type a last name
        And I type an email
        And I type a comment
        And I click on submit button
        Then I should presented with contact us unsuccessful lastname message

    Scenario: Invalid Contact Us Form Submission With Empty Email
        Given Navigate to the WebdriverUniversity homepage
        When I click the contact us button
        And I switch to new tab
        And I type a first name
        And I type a last name
        #And I type an email
        And I type a comment
        And I click on submit button
        Then I should presented with contact us unsuccessful email message