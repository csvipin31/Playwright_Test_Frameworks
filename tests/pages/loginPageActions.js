const { FIELD } = require('./loginPage');

export class LoginPageActions {
  constructor(page){
    this.page = page;
 }

  async login(username, password) {
    await this.page.fill(FIELD.SELECTOR.username, username);
    await this.page.fill(FIELD.SELECTOR.password, password);
    await this.page.click(FIELD.SELECTOR.loginButton);
  }

  async getErrorMessage() {
    await this.page.waitForSelector(FIELD.SELECTOR.error);
    return await this.page.innerText(FIELD.SELECTOR.error);
  }
}


