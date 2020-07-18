export default class BasePage{

    open (path) {
        return browser.url(`https://stage.localcoding.us/${path}`)
    }
};
