const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProductsPage extends Page {
    get heading () {
        return $('//div[@class="header_secondary_container"]//div[text()="Products"]');
    }

    async addToCartOfProduct(productName){
        return await $('//div[@class="inventory_item_name" and text()='+productName+']/ancestor::div[@class="inventory_item_label"]/following-sibling::div//button[text()="ADD TO CART"]');
    }

    async getProductPriceElement(productName){
        return await $('//div[@class="inventory_item_name" and text()='+productName+']/ancestor::div[@class="inventory_item_label"]/following-sibling::div/div[@class="inventory_item_price"]');
    }

    async getShoppingCartIcon(){
        return await $('//div[@id="shopping_cart_container"]//*[name()="svg"]');
    }

    async clickAddToCartOfProduct(productName){
        return await(await this.addToCartOfProduct(productName)).click()
    }

    async getProductCost(productName){
        return await(await this.getProductPriceElement(productName)).getText()
    }

    async clickShoppingCartIcon(){
        return (await this.getShoppingCartIcon()).click()
    }

}

module.exports = new ProductsPage();
