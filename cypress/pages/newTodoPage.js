import TodoPage from "./todoPage";

class NewTodoPage {
    // Elements
   

    get newTodoType() {
        return cy.get('[data-testid="new-todo"]')
    }

    get submitButton() {
        return cy.get('[data-testid="submit-newTask"]')
    }

   

    // Methods

    load() {
        cy.visit('/todo/new');
    }
    
    addTodo(item) {
        this.newTodoType.type(item)
        this.submitButton.click()
        return new TodoPage();
    }

}

export default NewTodoPage;