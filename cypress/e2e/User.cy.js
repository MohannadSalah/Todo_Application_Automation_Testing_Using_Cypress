/// <reference types="cypress" />

import LoginPage from "../pages/loginPage"
import TodoPage from "../pages/todoPage";

it('Should be able to login', () => {
    new LoginPage()
        .load()
        .login(Cypress.env("email"), Cypress.env("password"))
        .welcomeMessageShouldBeVisible();
    
});