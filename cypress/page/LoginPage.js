class LoginPage {
    selectorList() {
        const selector = {
            emailLogin: "[type='email']",
            passwordLogin:"[type='password']",
            loginButton: "[type='submit']",
            checkPageHome: 'home',
            loginAlertError: "[role='alert']"
        }
        return selector;
    }
    accessPageLogin() {
        cy.visit('login')
    }
    fieldPageLogin(email, password) {
        cy.get(this.selectorList().emailLogin).type(email)
        cy.get(this.selectorList().passwordLogin).type(password)
    }
    clickButtonLogin() {
        cy.get(this.selectorList().loginButton).click()
    }
    loginAlertError() {
        cy.get(this.selectorList().loginAlertError).should('contain', 'Email e/ou senha inválidos')
    }
}
export default LoginPage