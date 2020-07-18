import BasePage from "./BasePage";


class RegisterPage extends BasePage {
    get headerRegister(){
        return $('h1');
    }



    open(path){
        return super.open('user/register');
    }
}

export default new RegisterPage();
