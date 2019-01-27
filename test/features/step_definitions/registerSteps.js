const BasePage = require('../../pages/BasePage');
const chai = require('chai');

const EC = protractor.ExpectedConditions;
const expect = chai.expect;

module.exports = function registerSteps() {
    let basePage;

    this.Before(() => {
        basePage = new BasePage();
    });

    this.Given(/^I am on business account registry page/, function(done) {
        basePage.getRegister().then(done);
    });

    this.Given(/^I click that I accept the condition checkbox$/, function (done) {
        basePage.policy_checkbox.click().then(done);
    });

    this.When(/^I click on the registry button$/, function (done) {
        basePage.register_button.click().then(done);
    });

    this.Then(/^I get the following message "([^"]*)" for the field "([^"]*)"$/,
        function (message_field, name_field, done) {
            switch(name_field) {
                case 'Nombre':
                    basePage.register_first_name_error.getText().then(function (text) {
                        expect(text).to.equal(message_field);
                    }).then(done);
                    break;
                case 'Apellidos':
                    basePage.register_last_name_error.getText().then(function (text) {
                        expect(text).to.equal(message_field);
                    }).then(done);
                    break;
                case 'Empresa':
                    basePage.register_company_error.getText().then(function(text){
                        expect(text).to.equal(message_field);
                    }).then(done);
                    break;
                case 'Cargo':
                    basePage.register_job_title_error.getText().then(function(text){
                        expect(text).to.equal(message_field);
                    }).then(done);
                    break;
                case 'Telefono':
                    basePage.register_phone_error.getText().then(function (text) {
                        expect(text).to.equal(message_field);
                    }).then(done);
                    break;
                case 'Email':
                    basePage.register_email_error.getText().then(function(text){
                        expect(text).to.equal(message_field);
                    }).then(done);
                    break;
                default:
                    throw new Error(`${name_field} is not a expected option`);
            }
    });

}


