const test  = require('@playwright/test');
const { LoginPageActions } = require('../pages/loginPageActions');

exports.test = test.extend({
    loginPageActions: async({ page }, use) => {
        await use(new LoginPageActions(page));
    }
});

exports.expect = test.expect;

