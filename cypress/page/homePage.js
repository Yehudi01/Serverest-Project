class HomePage {
    selectorList() {
        const selector = {
            checkPageHome: "home"
        }
        return selector
    }
    accessPageHome() {
        cy.visit('home')
    }
}
export default HomePage