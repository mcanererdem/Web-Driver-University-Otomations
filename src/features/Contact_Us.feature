Feature: www.WebdriverUniversity.com - Contact Us Page

    #Scenario: Valid Contact Us Form Submission
    #    Given Navigate to the WebdriverUniversity homepage
    #    When I click the contact us button
    #    And I switch to new tab
    #    And I type a first name
    #    And I type a last name
    #    And I type an email
    #    And I type a comment
    #    And I click on submit button
    #    Then I should presented with contact us successful message

    #Scenario: Valid Contact Us Form Submission - With Paramatres
    #    Given Navigate to the WebdriverUniversity homepage
    #    When I click the contact us button
    #    And I switch to new tab
    #    And I type a first name as "Admin"
    #    And I type a last name as "Admin"
    #    And I type an email as "aaa@aaa.com"
    #    And I type a comment as "merhaba" "123"
    #    And I click on submit button
    #    Then I should presented with contact us successful message

    #Scenario: Valid Contact Us Form Submission With Random Data
    #    Given Navigate to the WebdriverUniversity homepage
    #    When I click the contact us button
    #    And I switch to new tab
    #    And I type a random first name
    #    And I type a random last name
    #    And I type a random email
    #    And I type a random comment
    #    And I click on submit button
    #    Then I should presented with contact us successful message

    #Scenario: Invalid Contact Us Form Submission - With Empty Last Name
    #    Given Navigate to the WebdriverUniversity homepage
    #    When I click the contact us button
    #    And I switch to new tab
    #    And I type a first name
    #    #And I type a last name
    #    And I type an email
    #    And I type a comment
    #    And I click on submit button
    #    Then I should presented with contact us unsuccessful lastname message

    #Scenario: Invalid Contact Us Form Submission - With Empty Email
    #    Given Navigate to the WebdriverUniversity homepage
    #    When I click the contact us button
    #    And I switch to new tab
    #    And I type a first name
    #    And I type a last name
    #    #And I type an email
    #    And I type a comment
    #    And I click on submit button
    #    Then I should presented with contact us unsuccessful email messagez

    Scenario Outline: Contact Us Form Submission - With Examples
        Given Navigate to the WebdriverUniversity homepage
        When I click the contact us button
        And I switch to new tab
        And I type a <firstname> and a <lastname>
        And I type an '<emailAddress>' and a '<comment>'
        And I click on submit button
        Then Ishould be presented with '<welcomeMessage>'
        Examples:
            | firstname | lastname | emailAddress | comment             | welcomeMessage              |
            | admin     | admin    | aaa@aaa.com  | My Comment Is None  | Thank You for your Message! |
            | admin2    | admin2   | aaa2@aaa.com | My Comment Is None2 | Thank You for your Message! |