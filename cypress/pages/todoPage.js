import NewTodoPage from "./newTodoPage";


class TodoPage {
   //Elements
    get welcomeMessage() {
    return cy.get('[data-testid="welcome"]')
    }

    get addButton() {
        return  cy.get('[data-testid="add"]')
    }

    get shouldBeAbleToAddaTodo() {
        return  cy.get('[data-testid="todo-item"]').eq(0)
    }

    get completeTask() {
        return cy.get('[data-testid="complete-task"]').eq(0)
    }

    get shouldColorChanged() {
        return cy.get('[data-testid="todo-item"]').eq(0)
    }
    
// Methods
    load() {
        cy.visit("/todo")
        return this;
    }

    clickOnAddButton() {
        this.addButton.click()
        return new NewTodoPage();
    }

    welcomeMessageShouldBeVisible() {
        this.welcomeMessage.should('be.visible')
        return this;
    }
    TodoName() {
        this.shouldBeAbleToAddaTodo
            .should('have.text', 'learn Automation')
        return this;
    }

    markFirstTodoBox() {
        this.completeTask.click()
        return this;
    }

    firstTodoShouldHaveColor(color) {
        this.shouldColorChanged.should('have.css', 'background-color', color)
        return this;
    }

}

export default TodoPage;