import userDate from '../fixtures/userDate.json'
import RegisterPage from '../page/registerPage';

const registerPage = new RegisterPage()

describe('Register Serverest', () => {
  const Chance = require('chance');
  const chance = new Chance();

it    ('Register Success', () => {
  registerPage.accessRegisterPage()
  registerPage.fieldRegisterPage(userDate.RegisterPage.registerSuccess.name, userDate.RegisterPage.registerSuccess.email, userDate.RegisterPage.registerSuccess.password)
  registerPage.clickButtonRegister()
})

  it('Register Fails', () => {
    registerPage.accessRegisterPage()
    registerPage.fieldRegisterPage(userDate.RegisterPage.registerFail.name, userDate.RegisterPage.registerFail.email, userDate.RegisterPage.registerFail.password)
    registerPage.clickButtonRegister()
  })
})