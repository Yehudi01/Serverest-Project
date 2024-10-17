class RegisterPage {
    selectorList() {
        const selector = {
            "registerName": "[type='text']",
            "registerEmail": "[type='email']",
            "registerPassword": "[type='password']",
            "registerButton": "[type='submit']"
        }
        return selector
    }
    accessRegisterPage() {
        cy.visit('cadastrarusuarios')
    }
    fieldRegisterPage(name, email, password) {
        cy.get(this.selectorList().registerName).type(name),
        cy.get(this.selectorList().registerEmail).type(email),
        cy.get(this.selectorList().registerPassword).type(password)
    }
    clickButtonRegister() {
        cy.get(this.selectorList().registerButton).click()
    }
}
export default RegisterPage