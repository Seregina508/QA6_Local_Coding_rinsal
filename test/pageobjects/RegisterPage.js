import BasePage from "./BasePage";


class RegisterPage extends BasePage {
    get headerRegister() {
        return $('h1');
    }

    get firstNameInput() {
        return $('#user_login_firstName')
    }

    get lastNameInput() {
        return $('#user_login_lastName')
    }

    get email() {
        return $('#user_login_email')
    }

    get password() {
        return $('#user_login_password')
    }

    get TandAlink() {
        return $('.ant-btn.pl-1.ant-btn-link.ant-btn-sm')
    }

    get endScrollContact() {
        return browser.$('//strong[text()="Contact"]')
    }

    get TandAlinkClose() {
        return $('[data-icon="close"]')
    }

    get agreement() {
        return $('#user_login_agreement')
    }

    get registerBtn() {
        return $('.ant-btn.ant-btn-primary.ant-btn-lg')
    }

    open(path) {
        return super.open('user/register');
    }
}

export default new RegisterPage();
