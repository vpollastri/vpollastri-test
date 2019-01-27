# Signaturit test

The purpose of this project is to set up the framework and run tests over Signaturit site in order to test some of their components.

In the folder `test/features` you will found a file called `NewBusinessAccountRegistry.feature`, in this file I wrote the requested test cases using the BDD syntax, only one of them is automated and it will be the only one that can be executed (I used the tag `automatic` for that). 

## Requisites
- NodeJS 

## Installation
- Get the repository
```
$ git clone git@github.com:vpollastri/vpollastri-test.git
$ cd vpollastri-test
```
- Install dependencies
```
$ npm install
```

## Run test cases
- Start the Selenium server
```
$ npm run start-server
```
- In a new console tab run the test case
```
$ npm run tests
```
- You should see:
```
[19:41:56] I/launcher - Running 1 instances of WebDriver
[19:41:56] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Feature: New business account registry form

    As a new user
    I want to complete the business account registry form
    So that I can create my business account

  @regression @automatic
  Scenario: Get the validation errors when the user does not send the required fields
  ✔ Given I am on business account registry page
  ✔ And I click that I accept the condition checkbox
  ✔ When I click on the registry button
  ✔ Then I get the following message "Nombre inválido" for the field "Nombre"
  ✔ And I get the following message "Apellidos inválidos" for the field "Apellidos"
  ✔ And I get the following message "Este campo no puede estar vacío." for the field "Empresa"
  ✔ And I get the following message "Este campo no puede quedar vacío." for the field "Cargo"
  ✔ And I get the following message "Este campo no puede quedar vacío." for the field "Telefono"
  ✔ And I get the following message "El email no es válido" for the field "Email"

1 scenario (1 passed)
9 steps (9 passed)
0m11.689s
[19:42:09] I/launcher - 0 instance(s) of WebDriver still running
[19:42:09] I/launcher - chrome #01 passed
```
Also a new file `result.json` will be created. This file will be cleaned and created with each execution.

I created a folder called `report` with one reported file of one execution only as example.
