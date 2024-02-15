const { browser } = require('@wdio/globals')

module.exports = class Page {
   
    async open () {
        await  browser.url(`https://www.saucedemo.com/v1/`)
        await browser.maximizeWindow()
    }
}
