import { test, expect } from '../utils/fixture';

const users = [
  { username: 'standard_user', password: 'secret_sauce', success: true },
  { username: 'locked_out_user', password: 'secret_sauce', locked: true },
  { username: 'problem_user', password: 'secret_sauce', success: true },
  { username: 'performance_glitch_user', password: 'secret_sauce', success: true }
];

users.forEach(({ username, password, success, locked }) => {
  test(`Login flow for ${username}`, async ({ page, loginPageActions }) => {
    await page.goto('/');
    await loginPageActions.login(username, password);
    
    if (success) {
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    } else if (locked) {
      const errorMessage = await loginPageActions.getErrorMessage();
      expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
    }
  });
});
