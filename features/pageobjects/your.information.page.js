const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class YourInformationPage extends Page {
    get firstName () {
        return $('//input[@id="first-name"]');
    }

    get lastName () {
        return $('//input[@id="last-name"]');
    }

    get postalCode () {
        return $('//input[@id="postal-code"]');
    }

    async enterUserInformation (firstName, lastName,postalcode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalcode)
    }

    async getContinueButton(){
        return await $('//input[@value="CONTINUE"]');
    }

    async clickContinueButton(){
        return await (await this.getContinueButton()).click()
    }
   
}

module.exports = new YourInformationPage();
