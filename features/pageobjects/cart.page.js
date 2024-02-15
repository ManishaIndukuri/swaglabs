const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page {
    async getCheckoutButton(productName){
        return await $('//a[text()="CHECKOUT"]');
    }

    async clickCheckoutButton(){
        return (await this.getCheckoutButton()).click()
    }

}

module.exports = new CartPage();
