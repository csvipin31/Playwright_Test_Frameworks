const { test, expect } = require('../utils/fixture');

test('Login and verify successful', async({ page,loginPageActions }) => {
    await page.goto('/');
    await loginPageActions.login('standard_user', 'secret_sauce');
    // Add assertion to verify the URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})
