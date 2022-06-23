Feature: Input

  Scenario: Detect the submit action
    Given I am in the Login page
    When I click the submit button
    Then I should be notified

  Scenario: Submit with empty fields
    Given I am in the Login page
    When I enter the email ""
    And password ""
    And I click the submit button
    Then I should be notified with the message "Please fill all fields"

  Scenario: Submit successfully
    Given I am in the Login page
    When I enter the email "pmapm@ua.pt"
    And I enter the password "password1234"
    And I click the submit button
    Then I should be in the Home page