const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get inputUsername () {
        return $('//input[@placeholder="Username"]');
    }

    get inputPassword () {
        return $('//input[@placeholder="Password"]');
    }

    get btnSubmit () {
        return $('//input[@value="LOGIN"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
