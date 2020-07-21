const dataRegisterPage = {
    header: 'Create an account',
};
const email = (Math.random() * 1000).toFixed() + '@gmail.com';
const RegisterData = {
    firstName: 'Vova',
    lastName: 'Green',
    email,
    password: 'Red123',
};
console.log('********************** EMAIL NEW USER *************************: ' + email);


export {dataRegisterPage, RegisterData};