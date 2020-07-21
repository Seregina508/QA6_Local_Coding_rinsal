import {expect} from 'chai';
import {dataRegisterPage} from '../data/DataPage';
import RegisterPage from "../pageobjects/RegisterPage";
import {RegisterData} from '../data/DataPage';



describe('USER REGISTER', () => {
    before(() => {
        RegisterPage.open();
    });
    it('should go to the page Register ',() => {
        expect(RegisterPage.headerRegister.getText()).eq(dataRegisterPage.header);
    });

    it('user should input first name', function () {
        RegisterPage.firstNameInput.setValue(RegisterData.firstName)
    });

    it('user should input last name', function () {
        RegisterPage.lastNameInput.setValue(RegisterData.lastName)
    });

    it('user should input email', function () {
        RegisterPage.email.setValue(RegisterData.email)
    });

    it('user should input password', function () {
        RegisterPage.password.setValue(RegisterData.password)
    });

    it('TandA link clickable', function () {
        RegisterPage.TandAlink.click()
    });

    it('TandA link end to scroll', function () {
        RegisterPage.endScrollContact.scrollIntoView()
    });

    it('TandA link close', function () {
        RegisterPage.TandAlinkClose.click()
    });

    it('user should click TandA checkbox', function () {
        RegisterPage.agreement.click()
    });

    it('user should click Register', function () {
        RegisterPage.registerBtn.click()
        browser.pause(2000)
    });

});









