import {expect} from 'chai';
import {dataRegisterPage} from '../data/DataPage';
import RegisterPage from "../pageobjects/RegisterPage";


describe('USER REGISTER', () => {
    before(() => {
        RegisterPage.open();
    });
    it('should go to the page Register ',() => {
        expect(RegisterPage.headerRegister.getText()).eq(dataRegisterPage.header);
    });
});


