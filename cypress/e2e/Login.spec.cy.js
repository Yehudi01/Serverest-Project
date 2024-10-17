import userDate from '../fixtures/userDate.json'
import LoginPage from '../page/LoginPage'
import HomePage from '../page/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login in Serverest', () => {

  it('Login Success', () => {
  loginPage.accessPageLogin()
  loginPage.fieldPageLogin(userDate.LoginPage.loginSuccess.email, userDate.LoginPage.loginSuccess.password)
  loginPage.clickButtonLogin()
  
  homePage.accessPageHome()
  })

  it('Login Fail', () => {
    loginPage.accessPageLogin()
    loginPage.fieldPageLogin(userDate.LoginPage.loginFail.email, userDate.LoginPage.loginFail.password)
    loginPage.clickButtonLogin()
    loginPage.loginAlertError()
  })
})