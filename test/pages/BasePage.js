const BasePage = function() {
    this.register_first_name_error = element(by.css('small[ng-if="model.error.firstName == true"]'));
    this.register_last_name_error = element(by.css('small[ng-if="model.error.lastName == true"]'));
    this.register_company_error = element(by.css('div[ng-class="{ \'has-error\': model.error.companyEmpty }"]'));
    this.register_job_title_error = element(by.css('div[ng-class="{ \'has-error\': model.error.titleEmpty }"]'));
    this.register_phone_error = element(by.css('small[ng-if="model.error.phoneEmpty"]'));
    this.register_email_error = element(by.css('div[ng-class="{ \'has-error\': model.error.email }"]'));

    this.policy_checkbox = element(by.className('info-links-checkbox'));
    this.register_button = element(by.id('register_submit'))

    this.get = () => browser.get(browser.baseUrl);

    this.getRegister = () => browser.get('es/register/business');

}

module.exports = BasePage;
