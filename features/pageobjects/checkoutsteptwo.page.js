const { $ } = require('@wdio/globals')
const Page = require('./page');

class ChekoutStepTwoPage extends Page {

    async getTotalCostWithoutTaxElement(){
        return await $('//div[@class="summary_subtotal_label"]');
    }
   
    async getTotalCostWithoutTax(){
        return await(await this.getTotalCostWithoutTaxElement()).getText()
    }


}

module.exports = new ChekoutStepTwoPage();
