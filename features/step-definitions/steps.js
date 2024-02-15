const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const { setValue, getValue } = require('@wdio/shared-store-service');
const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/products.page');
const cartPage = require('../pageobjects/cart.page');
const yourInformationPage = require('../pageobjects/your.information.page');
const checkoutTwoPage = require('../pageobjects/checkoutsteptwo.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a products page$/, async () => {
    await expect(ProductPage.heading).toBeExisting();
});

Then(/^add product (.*) to cart$/, async (productName) => {
    await ProductPage.clickAddToCartOfProduct(productName)
});

Then(/^get product (.*) cost and save shared data in key "([^"]*)"$/, async (productName, priceStoreKey) => {
    await browser.sharedStore.set(priceStoreKey, await ProductPage.getProductCost(productName))
});

Then(/^click shopping cart$/, async () => {
    await ProductPage.clickShoppingCartIcon()
});

Then(/^click checkout button$/, async () => {
    await cartPage.clickCheckoutButton()
});

Then(/^enter user information firstname as "([^"]*)" lastname as "([^"]*)" postal code "([^"]*)"$/, async (firstName, lastName, postalcode) => {
    await yourInformationPage.enterUserInformation(firstName, lastName, postalcode)
});

Then(/^click on continue button$/, async () => {
    await yourInformationPage.clickContinueButton()
});

Then(/^validate total of products "([^"]*)" cost equals the total products cost without tax in Checkout two page$/, async (productsPriceKeysInComaSeparated) => {
    let productsPricesInComaSeparatedArray = productsPriceKeysInComaSeparated.split(",")
    let totalCost = 0
    for (let index = 0; index < productsPricesInComaSeparatedArray.length; index++) {
        let currentValue = await browser.sharedStore.get(productsPricesInComaSeparatedArray[index])
        totalCost += Number(currentValue.replace('$', ''))
    }
    let totalCostWithoutTax = ((await checkoutTwoPage.getTotalCostWithoutTax()).split("$")[1]).trim()
    expect(totalCost).toEqual(Number(totalCostWithoutTax.replace('$', '')))

});


