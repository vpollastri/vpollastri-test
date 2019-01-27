Feature: New business account registry form
  As a new user
  I want to complete the business account registry form
  So that I can create my business account

  @manual
  @happy_path
  Scenario: Successfully create a business account
    Given I am on business account registry page
    And I complete the field "Nombre" with the value "Valeria"
    And I complete the field "Apellidos" with the value "Pollastri"
    And I complete the field "Nombre de la empresa" with the value "Testing company"
    And I complete the field "Cargo en la empresa" with the value "QA Job"
    And I complete the field "Teléfono" with the value "+34 12-345-67-89"
    And I complete the field "Email de empresa" with the value "pollastrivaleria@gmail.com"
    And I complete the field "Contraseña" with the value "Test1234"
    And  I click that I accept the condition checkbox
    When I click on the registry button
    Then The business account should be created

  @manual
  @error_test
  @regression
  Scenario: Get an error if the user tries to create the account with an invalid email
    Given I am on business account registry page
    And I complete the field "Nombre" with the value "Valeria"
    And I complete the field "Apellidos" with the value "Pollastri"
    And I complete the field "Nombre de la empresa" with the value "Testing company"
    And I complete the field "Cargo en la empresa" with the value "QA Job"
    And I complete the field "Teléfono" with the value "+34 12-345-67-89"
    And I complete the field "Email de empresa" with the value "Testing"
    And I complete the field "Contraseña" with the value "Test1234"
    And  I click that I accept the condition checkbox
    When I click on the registry button
    Then I get the following message "El email no es válido" for the field "Email"

  @manual
  @error_test
  @regression
  Scenario: Get an error if the user tries to create the account without accept the terms and conditions
    Given I am on business account registry page
    And I complete the field "Nombre" with the value "Valeria"
    And I complete the field "Apellidos" with the value "Pollastri"
    And I complete the field "Nombre de la empresa" with the value "Testing company"
    And I complete the field "Cargo en la empresa" with the value "QA Job"
    And I complete the field "Teléfono" with the value "+34 12-345-67-89"
    And I complete the field "Email de empresa" with the value "pollastrivaleria@gmail.com"
    And I complete the field "Contraseña" with the value "Test1234"
    But I don't click the terms and conditions checkbox
    When I click on the registry button
    Then I get the following message "Please check this box if you want to proceed."

  @regression
  @automatic
  Scenario: Get the validation errors when the user does not send the required fields
    Given I am on business account registry page
    And I click that I accept the condition checkbox
    When I click on the registry button
    Then I get the following message "Nombre inválido" for the field "Nombre"
    And I get the following message "Apellidos inválidos" for the field "Apellidos"
    And I get the following message "Este campo no puede estar vacío." for the field "Empresa"
    And I get the following message "Este campo no puede quedar vacío." for the field "Cargo"
    And I get the following message "Este campo no puede quedar vacío." for the field "Telefono"
    And I get the following message "El email no es válido" for the field "Email"
