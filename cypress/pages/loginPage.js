import TodoPage from "./todoPage";

class LoginPage {
// Elements
    
    get emailInput() {
        return cy.get('[data-testid="email"]')
    }
    
    get passwordInput() {
        return  cy.get('[data-testid="password"]')
    }

    get submitButton() {
        return  cy.get('.MuiButton-label')
    }


// Methods
    
    load() {
        cy.visit('/')
        return this;
    }

    login(email,password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
        return new TodoPage();
    }
}

export default LoginPage